const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/a9na.github.io/' : '',
  basePath: isProd ? '/a9na.github.io' : '',
  images: {
    loader: 'akamai',
    path: '',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  output: 'export',  
};

export default nextConfig;