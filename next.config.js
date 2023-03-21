const nextConfig = {
   basePath: '',
   reactStrictMode: true,
   images: {
      unoptimized: true,
      domains: [
         'images.unsplash.com',
         'ionicframework.com'
      ],
   },
   swcMinify: true,
   transpilePackages: [
      '@ionic/react', 
      '@ionic/core', 
      '@stencil/core', 
      'ionicons'
   ],
};

module.exports = nextConfig;
