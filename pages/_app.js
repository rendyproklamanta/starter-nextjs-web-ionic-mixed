import Layout from '../layouts/Layout';
import { isCapacitor } from '../utils/capacitor';
import 'animate.css';
import { wrapper } from '../store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const capacitor = isCapacitor;

if (capacitor) {
   import('tailwindcss/tailwind.css');
   import('../styles/global.css');
   import('../styles/variables.css');
} else {
   import('../styles/theme.bs.css');
}

function MyApp({ Component, ...rest }) {
   const { store, props } = wrapper.useWrappedStore(rest);
   const { pageProps } = props;
   const persistor = persistStore(store);

   return (
      <>
         <Provider store={store}>
            <PersistGate loading={process.env.NODE_ENV === 'development' ? 'Loading Persistor...' : false} persistor={persistor}>
            {capacitor ?
               <Component {...pageProps} />
               :
               <Layout>
                  <Component {...pageProps} />
               </Layout>
            }
            </PersistGate>
         </Provider>
      </>
   );
}

export default MyApp;
