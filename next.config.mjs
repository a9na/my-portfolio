const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
      ],
    },
  };
  

  const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/a9na.github.io/' : '',
  basePath: isProd ? '/a9na.github.io' : '',
}

  export default nextConfig;