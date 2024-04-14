/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "pbs.twimg.com", "f005.backblazeb2.com", "nftstorage.link"],
  },
  devIndicators: {
    buildActivity: false,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
