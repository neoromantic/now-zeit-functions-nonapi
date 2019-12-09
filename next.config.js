const nextConfig = {
  target: "serverless",
  distDir: ".next",
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true,
  },
  experimental: { granularChunks: true }
};
module.exports = nextConfig;
