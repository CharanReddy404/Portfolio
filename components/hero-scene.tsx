'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CSS2DObject, CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';

// An isometric model of an event-driven backend:
//   request path  client → load balancer → API services (Kubernetes) → database, with a cache beside them
//   event path    API services → Kafka → consumer services (Kubernetes)
// Hover (or tap) a component to see what it does.

type Palette = {
  surface: string;
  edge: string;
  hot: string;
  hotEdge: string;
  accent: string;
  grid: string;
  screen: string;
  platform: string;
};

const PALETTES: Record<'light' | 'dark', Palette> = {
  light: {
    surface: '#fbfaf6',
    edge: '#1c1917',
    hot: '#1c1917',
    hotEdge: '#000000',
    accent: '#c2410c',
    grid: '#e7e5e4',
    screen: '#292524',
    platform: '#f1efe9',
  },
  dark: {
    surface: '#1c1917',
    edge: '#a8a29e',
    hot: '#e7e5e4',
    hotEdge: '#fafaf9',
    accent: '#fb923c',
    grid: '#292524',
    screen: '#0c0a09',
    platform: '#171412',
  },
};

type Pos = [number, number];

// Positions are chosen on screen and converted to ground (x, z). For the isometric camera,
// screen-x grows with x − z and items with larger x + z sit lower on screen.
const S2 = Math.SQRT2;
const ground = (screenX: number, depth: number): Pos => [(depth + screenX * S2) / 2, (depth - screenX * S2) / 2];
const ACROSS: Pos = [1 / S2, -1 / S2]; // one unit to the right on screen

type Spots = Record<'client' | 'balancer' | 'api' | 'cache' | 'database' | 'kafkaFrom' | 'kafkaTo' | 'consumers', Pos>;

// Wide screens: everything flows left to right. Phones: the same flow stacked top to bottom.
const LAYOUTS: Record<'wide' | 'compact', Spots> = {
  wide: {
    client: ground(-7.4, -1.2),
    balancer: ground(-4.6, -0.6),
    api: ground(-1.0, 0),
    cache: ground(-1.0, -5.6),
    database: ground(3.8, -3.6),
    kafkaFrom: ground(2.0, 3.2),
    kafkaTo: ground(4.8, 3.2),
    consumers: ground(7.4, 3.4),
  },
  compact: {
    client: ground(-2.6, -7.2),
    balancer: ground(-0.4, -6.0),
    cache: ground(2.8, -6.8),
    api: ground(0, -1.0),
    database: ground(2.3, 3.4),
    kafkaFrom: ground(-2.8, 5.4),
    kafkaTo: ground(-0.2, 5.4),
    consumers: ground(2.6, 8.6),
  },
};

type Component = { label: HTMLDivElement; noteEl: HTMLDivElement };

export default function HeroScene({
  theme,
  layout,
  align = 'center',
}: {
  theme: 'light' | 'dark';
  layout: 'wide' | 'compact';
  align?: 'center' | 'right';
}) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const c = PALETTES[theme];
    const SPOTS = LAYOUTS[layout];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- renderers -------------------------------------------------------
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.className = 'absolute inset-0 h-full w-full';
    host.appendChild(renderer.domElement);

    const labels = new CSS2DRenderer();
    labels.domElement.className = 'pointer-events-none absolute inset-0';
    host.appendChild(labels.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);

    scene.add(new THREE.AmbientLight('#ffffff', theme === 'dark' ? 0.7 : 0.9));
    const sun = new THREE.DirectionalLight('#ffffff', theme === 'dark' ? 0.6 : 0.5);
    sun.position.set(4, 10, 2);
    scene.add(sun);

    const model = new THREE.Group();
    scene.add(model);

    const grid = new THREE.GridHelper(26, 26, c.grid, c.grid);
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.7;
    grid.position.set(0, 0, 0);
    model.add(grid);

    // --- helpers ---------------------------------------------------------
    const disposables: { dispose(): void }[] = [];
    const track = <T extends { dispose(): void }>(x: T) => (disposables.push(x), x);

    const surfaceMat = track(new THREE.MeshLambertMaterial({ color: c.surface }));
    const platformMat = track(new THREE.MeshLambertMaterial({ color: c.platform }));
    const hotMat = track(new THREE.MeshLambertMaterial({ color: c.hot }));
    const screenMat = track(new THREE.MeshBasicMaterial({ color: c.screen }));
    const accentMat = track(new THREE.MeshBasicMaterial({ color: c.accent }));
    const edgeMat = track(new THREE.LineBasicMaterial({ color: c.edge }));
    const ridgeMat = track(new THREE.MeshBasicMaterial({ color: c.edge, transparent: true, opacity: 0.45 }));
    const codeMat = track(new THREE.MeshBasicMaterial({ color: '#a8a29e', transparent: true, opacity: 0.6 }));
    const hotEdgeMat = track(new THREE.LineBasicMaterial({ color: c.hotEdge }));

    function solid(geo: THREE.BufferGeometry, mat: THREE.Material = surfaceMat, lines = edgeMat) {
      track(geo);
      const g = new THREE.Group();
      g.add(new THREE.Mesh(geo, mat));
      g.add(new THREE.LineSegments(track(new THREE.EdgesGeometry(geo, 25)), lines));
      return g;
    }

    // The camera frames these objects (not the floor grid) at every size.
    const fitTargets: THREE.Object3D[] = [];
    function place(obj: THREE.Object3D, [x, z]: Pos, y = 0) {
      obj.position.set(x, y, z);
      model.add(obj);
      fitTargets.push(obj);
      return obj;
    }

    // Hoverable components: every mesh inside `obj` points back to its component.
    const hoverables: THREE.Object3D[] = [];
    function component(obj: THREE.Object3D, title: string, note: string, [x, z]: Pos, labelY: number) {
      const el = document.createElement('div');
      el.className =
        'max-w-[210px] rounded border border-line bg-bg/90 px-1.5 py-0.5 font-mono text-[10px] text-muted backdrop-blur-sm transition-colors sm:text-[11px]';
      const titleEl = document.createElement('div');
      titleEl.className = 'whitespace-nowrap';
      titleEl.textContent = title;
      const noteEl = document.createElement('div');
      noteEl.className = 'mt-0.5 font-sans text-[11px] leading-snug text-fg sm:text-xs';
      noteEl.textContent = note;
      noteEl.hidden = true;
      el.append(titleEl, noteEl);
      const anchor = new CSS2DObject(el);
      anchor.position.set(x, labelY, z);
      model.add(anchor);
      const comp: Component = { label: el, noteEl };
      obj.traverse((o) => {
        if ((o as THREE.Mesh).isMesh) {
          o.userData.component = comp;
          hoverables.push(o);
        }
      });
      return titleEl;
    }

    const offset = ([x, z]: Pos, across: number, depth = 0): Pos => [
      x + ACROSS[0] * across + depth / 2,
      z + ACROSS[1] * across + depth / 2,
    ];
    const v = ([x, z]: Pos, y = 0.15) => new THREE.Vector3(x, y, z);

    // --- models ----------------------------------------------------------
    const leds: THREE.Mesh[] = [];

    // Client: a laptop with code on screen
    {
      const laptop = new THREE.Group();
      laptop.add(solid(new THREE.BoxGeometry(1.4, 0.08, 1.0)).translateY(0.04));
      const lid = new THREE.Group();
      lid.add(solid(new THREE.BoxGeometry(1.4, 0.92, 0.06)));
      const display = new THREE.Mesh(track(new THREE.PlaneGeometry(1.22, 0.74)), screenMat);
      display.position.z = 0.032;
      lid.add(display);
      for (let i = 0; i < 4; i++) {
        const width = 0.3 + ((i * 37) % 5) * 0.12;
        const line = new THREE.Mesh(track(new THREE.PlaneGeometry(width, 0.05)), i === 1 ? accentMat : codeMat);
        line.position.set(-0.45 + width / 2, 0.22 - i * 0.14, 0.034);
        lid.add(line);
      }
      lid.position.set(0, 0.5, -0.47);
      lid.rotation.x = -0.22;
      laptop.add(lid);
      laptop.rotation.y = Math.PI / 4;
      place(laptop, SPOTS.client);
      component(laptop, 'Client', 'Web and mobile apps calling the API.', SPOTS.client, 1.5);
    }

    // Load balancer: a network appliance with ports and status lights
    {
      const lb = new THREE.Group();
      lb.add(solid(new THREE.BoxGeometry(1.7, 0.42, 1.1)).translateY(0.21));
      for (let i = 0; i < 4; i++) {
        const port = solid(new THREE.BoxGeometry(0.22, 0.14, 0.04), hotMat, hotEdgeMat);
        port.position.set(-0.55 + i * 0.3, 0.2, 0.57);
        lb.add(port);
        const led = new THREE.Mesh(track(new THREE.BoxGeometry(0.06, 0.04, 0.02)), accentMat);
        led.position.set(-0.55 + i * 0.3, 0.34, 0.57);
        lb.add(led);
        leds.push(led);
      }
      lb.rotation.y = Math.PI / 4;
      place(lb, SPOTS.balancer);
      component(lb, 'Load balancer', 'Spreads traffic across healthy instances.', SPOTS.balancer, 0.95);
    }

    // A Kubernetes cluster: platform + helm wheel + a row of Docker containers.
    // Returns the top of each container, where packets arrive and leave.
    function cluster(center: Pos, pods: number, size: number, spacing: number) {
      const platform = new THREE.Group();
      platform.add(solid(new THREE.BoxGeometry(size, 0.12, size), platformMat).translateY(0.06));

      const wheel = new THREE.Group();
      const ring = new THREE.Mesh(track(new THREE.TorusGeometry(0.26, 0.04, 10, 7)), accentMat);
      wheel.add(ring);
      for (let i = 0; i < 7; i++) {
        const a = (i / 7) * Math.PI * 2;
        const spoke = new THREE.Mesh(track(new THREE.BoxGeometry(0.03, 0.36, 0.03)), accentMat);
        spoke.position.set(Math.sin(a) * 0.17, Math.cos(a) * 0.17, 0);
        spoke.rotation.z = -a;
        wheel.add(spoke);
        const knob = new THREE.Mesh(track(new THREE.SphereGeometry(0.045, 8, 8)), accentMat);
        knob.position.set(Math.sin(a) * 0.36, Math.cos(a) * 0.36, 0);
        wheel.add(knob);
      }
      const corner = size / 2 - 0.45;
      wheel.position.set(corner, 0.55, corner);
      wheel.rotation.y = Math.PI / 4;
      platform.add(wheel);
      wheels.push(wheel);
      place(platform, center);
      component(
        platform,
        'Kubernetes',
        'Schedules, scales and heals the containers.',
        offset(center, -size / 2, size / 2),
        0.3,
      );

      const containers = new THREE.Group();
      const tops: THREE.Vector3[] = [];
      const lights: THREE.Mesh[] = [];
      for (let p = 0; p < pods; p++) {
        const along = (p - (pods - 1) / 2) * spacing;
        const [x, z] = offset([0, 0], along);
        const pod = new THREE.Group();
        for (let level = 0; level < 2; level++) {
          const top = level === 1;
          const box = solid(
            new THREE.BoxGeometry(0.62, 0.42, 1.0),
            top ? hotMat : surfaceMat,
            top ? hotEdgeMat : edgeMat,
          );
          box.position.y = 0.33 + level * 0.44;
          pod.add(box);
          // Corrugated ridges on the two faces the camera sees
          for (let r = 0; r < 6; r++) {
            const ridge = new THREE.Mesh(track(new THREE.BoxGeometry(0.02, 0.32, 0.02)), ridgeMat);
            ridge.position.set(0.32, box.position.y, -0.38 + r * 0.15);
            pod.add(ridge);
          }
          for (let r = 0; r < 3; r++) {
            const ridge = new THREE.Mesh(track(new THREE.BoxGeometry(0.02, 0.32, 0.02)), ridgeMat);
            ridge.position.set(-0.2 + r * 0.2, box.position.y, 0.51);
            pod.add(ridge);
          }
        }
        // Activity light on top of each container
        const light = new THREE.Mesh(
          track(new THREE.BoxGeometry(0.16, 0.05, 0.16)),
          track(new THREE.MeshBasicMaterial({ color: c.accent, transparent: true, opacity: 0.25 })),
        );
        light.position.y = 1.2;
        pod.add(light);
        lights.push(light);
        pod.position.set(x, 0, z);
        containers.add(pod);
        tops.push(new THREE.Vector3(center[0] + x, 1.25, center[1] + z));
      }
      place(containers, center);
      return { containers, tops, lights };
    }

    const wheels: THREE.Object3D[] = [];
    const api = cluster(SPOTS.api, 3, 3.4, 1.1);
    component(
      api.containers,
      'API services',
      'Stateless APIs in Docker containers, scaled by Kubernetes.',
      offset(SPOTS.api, 0, -0.9),
      1.85,
    );

    const consumers = cluster(SPOTS.consumers, 2, 2.6, 1.1);
    const consumerTitleEl = component(
      consumers.containers,
      'Consumer services · 0 events',
      'Backend workers that react to events: notifications, syncs and jobs.',
      offset(SPOTS.consumers, 0, -0.7),
      1.85,
    );

    // Cache: a memory module with chips
    {
      const ram = new THREE.Group();
      ram.add(solid(new THREE.BoxGeometry(1.6, 0.1, 0.6)).translateY(0.3));
      for (let i = 0; i < 4; i++) {
        const chip = solid(new THREE.BoxGeometry(0.28, 0.08, 0.36), hotMat, hotEdgeMat);
        chip.position.set(-0.54 + i * 0.36, 0.39, 0);
        ram.add(chip);
      }
      const leg = solid(new THREE.BoxGeometry(0.1, 0.3, 0.1));
      leg.position.set(-0.6, 0.15, 0);
      const leg2 = leg.clone();
      leg2.position.x = 0.6;
      ram.add(leg, leg2);
      ram.rotation.y = Math.PI / 4;
      place(ram, SPOTS.cache);
      component(ram, 'Cache', 'Hot data kept in memory for fast reads.', SPOTS.cache, 0.95);
    }

    // Database: stacked disks; the top disk glows on each write
    const dbTop = new THREE.Mesh(
      track(new THREE.CylinderGeometry(0.75, 0.75, 0.42, 40)),
      track(
        new THREE.MeshLambertMaterial({ color: c.surface, emissive: new THREE.Color(c.accent), emissiveIntensity: 0 }),
      ),
    );
    let dbTitle: HTMLDivElement;
    {
      const db = new THREE.Group();
      for (let i = 0; i < 2; i++) {
        const disk = solid(new THREE.CylinderGeometry(0.75, 0.75, 0.42, 40));
        disk.position.y = 0.21 + i * 0.5;
        db.add(disk);
      }
      dbTop.position.y = 0.21 + 2 * 0.5;
      db.add(dbTop);
      db.add(
        new THREE.LineSegments(track(new THREE.EdgesGeometry(dbTop.geometry, 25)), edgeMat).translateY(
          dbTop.position.y,
        ),
      );
      place(db, SPOTS.database);
      dbTitle = component(
        db,
        'Database · 10,482 writes',
        'Source of truth. Every write stays consistent.',
        SPOTS.database,
        1.85,
      );
    }

    // Kafka: a broker plinth with three partition logs running left-to-right on screen
    const kStart = v(SPOTS.kafkaFrom, 0.42);
    const kEnd = v(SPOTS.kafkaTo, 0.42);
    const kafkaLen = kStart.distanceTo(kEnd);
    const streamEvents: { mesh: THREE.Mesh; offset: number; speed: number }[] = [];
    {
      const dir = kEnd.clone().sub(kStart).normalize();
      const kafka = new THREE.Group();
      kafka.position.set((kStart.x + kEnd.x) / 2, 0, (kStart.z + kEnd.z) / 2);
      kafka.rotation.y = -Math.atan2(dir.z, dir.x);
      kafka.add(solid(new THREE.BoxGeometry(kafkaLen + 0.3, 0.26, 1.3)).translateY(0.13));
      const eventGeo = track(new THREE.BoxGeometry(0.13, 0.13, 0.13));
      [-0.4, 0, 0.4].forEach((z, p) => {
        const rail = solid(new THREE.BoxGeometry(kafkaLen, 0.06, 0.26), p === 1 ? surfaceMat : platformMat);
        rail.position.set(0, 0.3, z);
        kafka.add(rail);
        for (let x = -kafkaLen / 2 + 0.3; x < kafkaLen / 2; x += 0.3) {
          const tick = new THREE.Mesh(track(new THREE.BoxGeometry(0.015, 0.065, 0.26)), ridgeMat);
          tick.position.set(x, 0.305, z);
          kafka.add(tick);
        }
        // The middle partition carries the published events; the outer ones stream their own.
        if (p === 1) return;
        for (let e = 0; e < 3; e++) {
          const mesh = new THREE.Mesh(eventGeo, accentMat);
          mesh.position.set(0, 0.4, z);
          kafka.add(mesh);
          streamEvents.push({ mesh, offset: e / 3 + p * 0.17, speed: 0.2 + p * 0.05 });
        }
      });
      model.add(kafka);
      fitTargets.push(kafka);
      component(
        kafka,
        'Kafka · event stream',
        'Events published by the APIs and delivered to other backend services.',
        offset([(kStart.x + kEnd.x) / 2, (kStart.z + kEnd.z) / 2], 0, 1.4),
        0.05,
      );
    }

    // --- wires and packets ----------------------------------------------
    function arcV(pa: THREE.Vector3, pb: THREE.Vector3, lift = 1.2) {
      const mid = pa.clone().lerp(pb, 0.5);
      mid.y = Math.max(pa.y, pb.y) + lift;
      return new THREE.QuadraticBezierCurve3(pa, mid, pb);
    }
    function drawWire(curve: THREE.Curve<THREE.Vector3>, opacity = 0.7) {
      const geo = track(new THREE.BufferGeometry().setFromPoints(curve.getPoints(48)));
      const mat = track(
        new THREE.LineDashedMaterial({ color: c.edge, dashSize: 0.14, gapSize: 0.1, transparent: true, opacity }),
      );
      const line = new THREE.Line(geo, mat);
      line.computeLineDistances();
      model.add(line);
    }

    // Request path: client → load balancer → one of the API containers → database (round-robin).
    const clientPt = v(SPOTS.client);
    const lbPt = v(SPOTS.balancer, 0.45);
    const dbPt = v(SPOTS.database, 1.45);
    const toLb = arcV(clientPt, lbPt, 0.9);
    drawWire(toLb);
    const requestRoutes = api.tops.map((top) => {
      const toPod = arcV(lbPt, top, 0.8);
      const toDb = arcV(top, dbPt, 0.9);
      drawWire(toPod, 0.5);
      drawWire(toDb, 0.4);
      const route = new THREE.CurvePath<THREE.Vector3>();
      route.add(toLb);
      route.add(toPod);
      route.add(toDb);
      return route;
    });

    // Event path: an API container publishes → Kafka → a consumer container.
    const eventRoutes = api.tops.map((top, i) => {
      const toKafka = arcV(top, kStart, 0.5);
      const consumerTop = consumers.tops[i % consumers.tops.length];
      const toConsumer = arcV(kEnd, consumerTop, 0.6);
      drawWire(toKafka, 0.35);
      drawWire(toConsumer, 0.35);
      const route = new THREE.CurvePath<THREE.Vector3>();
      route.add(toKafka);
      route.add(new THREE.LineCurve3(kStart, kEnd));
      route.add(toConsumer);
      return { route, consumer: i % consumers.tops.length };
    });

    const cacheHop = arcV(api.tops[0], v(SPOTS.cache, 0.45), 0.9);
    drawWire(cacheHop);

    const packetGeo = track(new THREE.BoxGeometry(0.18, 0.18, 0.18));
    const requests = Array.from({ length: 6 }, (_, i) => {
      const m = new THREE.Mesh(packetGeo, accentMat);
      m.userData = { offset: i / 6, route: i % 3, last: 0 };
      model.add(m);
      return m;
    });
    const eventGeoFlying = track(new THREE.OctahedronGeometry(0.12));
    const events = Array.from({ length: 4 }, (_, i) => {
      const m = new THREE.Mesh(eventGeoFlying, accentMat);
      m.userData = { offset: i / 4, route: i % 3, last: 0 };
      model.add(m);
      return m;
    });
    const cachePacket = new THREE.Mesh(track(new THREE.SphereGeometry(0.11, 16, 16)), accentMat);
    model.add(cachePacket);

    // --- camera fitting -------------------------------------------------
    const CAM_DIR = new THREE.Vector3(10, 9, 10).normalize();
    const target = new THREE.Vector3();
    function placeCamera(lift = 0) {
      camera.position.copy(target).addScaledVector(CAM_DIR, 20);
      camera.position.y += lift;
      camera.lookAt(target);
    }
    // Point the isometric camera at the models' centre and size the view to fit them, leaving room for labels.
    function fit(aspect: number) {
      const world = new THREE.Box3();
      fitTargets.forEach((o) => world.expandByObject(o));
      world.getCenter(target);
      placeCamera();
      camera.updateMatrixWorld();
      const view = new THREE.Box3();
      const box = new THREE.Box3();
      const corner = new THREE.Vector3();
      fitTargets.forEach((o) => {
        box.setFromObject(o);
        box.max.y += 0.6; // headroom for the label above each object
        for (let i = 0; i < 8; i++) {
          corner.set(i & 1 ? box.max.x : box.min.x, i & 2 ? box.max.y : box.min.y, i & 4 ? box.max.z : box.min.z);
          view.expandByPoint(corner.applyMatrix4(camera.matrixWorldInverse));
        }
      });
      const cy = (view.max.y + view.min.y) / 2;
      const modelW = view.max.x - view.min.x;
      const modelH = view.max.y - view.min.y;
      // With align="right" the model fills the right part of the canvas, leaving the left for hero text.
      // align="right": fill only the free space to the right of the hero text (marked with data-hero-text).
      let share = 1;
      if (align === 'right') {
        const canvasBox = host!.getBoundingClientRect();
        const textBox = document.querySelector('[data-hero-text]')?.getBoundingClientRect();
        const free = textBox ? (canvasBox.right - textBox.right - 16) / canvasBox.width : 0.6;
        share = Math.min(0.7, Math.max(0.45, free));
      }
      const half = Math.max(modelH / 2, modelW / share / 2 / aspect) * 1.12;
      const span = half * aspect * 2;
      if (align === 'right') {
        camera.right = view.max.x + span * 0.07;
        camera.left = camera.right - span;
      } else {
        const cx = (view.max.x + view.min.x) / 2;
        camera.left = cx - span / 2;
        camera.right = cx + span / 2;
      }
      camera.top = cy + half;
      camera.bottom = cy - half;
      camera.updateProjectionMatrix();
    }

    let active: Component | null = null;
    function render() {
      renderer.render(scene, camera);
      labels.render(scene, camera);
      // CSS2DRenderer re-sorts label z-index every frame; keep the open note on top.
      if (active) active.label.style.zIndex = '1000';
    }
    function resize() {
      const w = host!.clientWidth;
      const h = host!.clientHeight;
      renderer.setSize(w, h, false);
      labels.setSize(w, h);
      fit(w / h);
      render();
    }
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    // --- hover notes ----------------------------------------------------
    const raycaster = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    function setActive(next: Component | null) {
      if (next === active) return;
      for (const comp of [active, next]) {
        if (!comp) continue;
        const on = comp === next;
        comp.noteEl.hidden = !on;
        comp.label.classList.toggle('border-accent', on);
        comp.label.classList.toggle('text-accent', on);
      }
      active = next;
      renderer.domElement.style.cursor = next ? 'help' : '';
      render();
    }
    function pick(e: PointerEvent) {
      const r = renderer.domElement.getBoundingClientRect();
      ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      raycaster.setFromCamera(ndc, camera);
      const hit = raycaster.intersectObjects(hoverables, false)[0];
      return (hit?.object.userData.component as Component | undefined) ?? null;
    }
    const onHover = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') setActive(pick(e));
    };
    const onTap = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') return;
      const hit = pick(e);
      setActive(hit === active ? null : hit);
    };
    const onLeave = () => setActive(null);
    renderer.domElement.addEventListener('pointermove', onHover);
    renderer.domElement.addEventListener('pointerdown', onTap);
    renderer.domElement.addEventListener('pointerleave', onLeave);

    // --- parallax & loop ------------------------------------------------
    const mouse = { x: 0, y: 0, sx: 0, sy: 0 };
    const onMove = (e: PointerEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(host);

    let writes = 10482;
    let consumed = 0;
    let dbPulse = 0;
    const consumerPulse = consumers.lights.map(() => 0);
    const clock = new THREE.Clock();
    let raf = 0;

    function frame() {
      raf = requestAnimationFrame(frame);
      if (!visible) {
        clock.getDelta();
        return;
      }
      const dt = Math.min(clock.getDelta(), 0.05);
      const t = clock.elapsedTime;

      mouse.sx += (mouse.x - mouse.sx) * 0.05;
      mouse.sy += (mouse.y - mouse.sy) * 0.05;
      model.rotation.y = mouse.sx * 0.15 + Math.sin(t * 0.25) * 0.03;
      placeCamera(mouse.sy * 1.5);

      requests.forEach((p) => {
        const progress = (t * 0.08 + p.userData.offset) % 1;
        p.position.copy(requestRoutes[p.userData.route].getPointAt(progress));
        p.rotation.set(t * 2, t * 1.5, 0);
        if (progress < p.userData.last) {
          dbPulse = 1;
          writes += 1;
          dbTitle.textContent = `Database · ${writes.toLocaleString('en-US')} writes`;
        }
        p.userData.last = progress;
      });

      events.forEach((e) => {
        const { route, consumer } = eventRoutes[e.userData.route];
        const progress = (t * 0.07 + e.userData.offset) % 1;
        e.position.copy(route.getPointAt(progress));
        e.rotation.y = t * 3;
        if (progress < e.userData.last) {
          consumerPulse[consumer] = 1;
          consumed += 1;
          consumerTitleEl.textContent = `Consumer services · ${consumed.toLocaleString('en-US')} event${consumed === 1 ? '' : 's'}`;
        }
        e.userData.last = progress;
      });

      cachePacket.position.copy(cacheHop.getPointAt((Math.sin(t * 1.4) + 1) / 2));
      streamEvents.forEach(({ mesh, offset, speed }) => {
        mesh.position.x = (((t * speed + offset) % 1) - 0.5) * kafkaLen;
      });

      dbPulse = Math.max(0, dbPulse - dt * 1.6);
      (dbTop.material as THREE.MeshLambertMaterial).emissiveIntensity = dbPulse * 0.8;
      consumers.lights.forEach((light, i) => {
        consumerPulse[i] = Math.max(0, consumerPulse[i] - dt * 1.5);
        (light.material as THREE.MeshBasicMaterial).opacity = 0.25 + consumerPulse[i] * 0.75;
      });
      api.lights.forEach((light, i) => {
        (light.material as THREE.MeshBasicMaterial).opacity = 0.35 + 0.35 * Math.max(0, Math.sin(t * 2.2 + i * 2));
      });

      wheels.forEach((w) => w.rotateZ(dt * 0.6));
      leds.forEach((led, i) => {
        led.visible = Math.sin(t * (3 + (i % 3)) + i * 1.7) > -0.3;
      });

      render();
    }

    if (reduceMotion) {
      requests.forEach((p) => p.position.copy(requestRoutes[p.userData.route].getPointAt(p.userData.offset)));
      events.forEach((e) => e.position.copy(eventRoutes[e.userData.route].route.getPointAt(e.userData.offset)));
      cachePacket.position.copy(cacheHop.getPointAt(0.5));
      streamEvents.forEach(({ mesh, offset }) => (mesh.position.x = ((offset % 1) - 0.5) * kafkaLen));
    }
    resize();
    if (!reduceMotion) frame();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      renderer.domElement.removeEventListener('pointermove', onHover);
      renderer.domElement.removeEventListener('pointerdown', onTap);
      renderer.domElement.removeEventListener('pointerleave', onLeave);
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
      host.removeChild(renderer.domElement);
      host.removeChild(labels.domElement);
    };
  }, [theme, layout, align]);

  return <div ref={hostRef} className='relative h-full w-full' aria-hidden='true' />;
}
