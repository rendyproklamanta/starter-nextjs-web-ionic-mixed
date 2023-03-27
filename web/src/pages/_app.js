import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import '../styles/bootstrap.css';
import Aos from 'aos';
import Layout from '../components/layout';
import { wrapper } from '../store/store';
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';

// import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';

function MyApp({ Component, ...rest }) {
   const { store, props } = wrapper.useWrappedStore(rest);
   const { pageProps } = props;
   // const persistor = persistStore(store);

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
         <NextNProgress options={{ showSpinner: false }} />
         <Provider store={store}>
            {/* <PersistGate loading={process.env.NODE_ENV === 'development' ? 'Loading Persistor...' : false} persistor={persistor}> */}
            <Layout>
               <Component {...pageProps} suppressHydrationWarning={true} />
            </Layout>
            {/* </PersistGate> */}
         </Provider>
      </>
   );
}

export default MyApp;
