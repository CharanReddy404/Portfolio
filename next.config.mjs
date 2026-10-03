/** @type {import('next').NextConfig} */
const nextConfig = {
  // The old multi-page routes now live as sections on the home page.
  async redirects() {
    return [
      ...['experience', 'projects', 'certifications'].map((section) => ({
        source: `/${section}`,
        destination: `/#${section}`,
        permanent: true,
      })),
      { source: '/blogs', destination: '/', permanent: false },
    ];
  },
};

export default nextConfig;
