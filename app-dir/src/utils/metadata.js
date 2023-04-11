export const Metadata = {
   title: 'Next.js Default',
   url: '',
   description: 'Welcome to Next.js',
   keywords: ['Next.js', 'React', 'JavaScript'],
   openGraph: {
      title: 'Next.js Default',
      description: 'The React Framework for the Web',
      url: 'https://nextjs.org',
      siteName: 'Next.js',
      images: [
         {
            url: 'https://nextjs.org/og.png',
            width: 800,
            height: 600,
         },
         {
            url: 'https://nextjs.org/og-alt.png',
            width: 1800,
            height: 1600,
            alt: 'My custom alt',
         },
      ],
      locale: 'en-US',
      type: 'website',
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Next.js',
      description: 'The React Framework for the Web',
      siteId: '1467726470533754880',
      creator: '@nextjs',
      creatorId: '1467726470533754880',
      images: ['https://nextjs.org/og.png'],
   },
   viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
   },
   robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
         index: true,
         follow: false,
         noimageindex: true,
         'max-video-preview': -1,
         'max-image-preview': 'large',
         'max-snippet': -1,
      },
   },
};