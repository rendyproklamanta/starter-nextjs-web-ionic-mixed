import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import '../styles/bootstrap.css';
import Aos from 'aos';
// import Layout from '../components/layout';
import { wrapper } from '../store/store';
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';
import { DefaultSeo } from 'next-seo';
import { metadata } from '../utils/metadata';
import { SessionProvider } from 'next-auth/react';

// import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';

function MyApp({ Component, ...rest }) {
   const { store, props } = wrapper.useWrappedStore(rest);
   const { pageProps } = props;
   // const persistor = persistStore(store);
   const getLayout = Component.getLayout || ((page) => page);

   useEffect(() => {
      if (process.env.NODE_ENV === 'production') {
         TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
      }
      Aos.init({
         delay: 400,
         duration: 800,
      });
   }, []);

   return (
      <>
         <DefaultSeo {...metadata} />

         <NextNProgress options={{ showSpinner: false }} />

         <SessionProvider session={pageProps.session}>
            <Provider store={store}>
               {/* <PersistGate loading={process.env.NODE_ENV === 'development' ? 'Loading Persistor...' : false} persistor={persistor}> */}
               {getLayout(<Component {...pageProps} suppressHydrationWarning={true} />)}
               {/* </PersistGate> */}
            </Provider>
         </SessionProvider>
      </>
   );
}

export default MyApp;
