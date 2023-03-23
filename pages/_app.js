import Layout from '../layouts/Layout';
import { isCapacitor } from '../constants';
import 'animate.css';
import { wrapper } from '../store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const capacitor = isCapacitor;

if (capacitor) {
   require('tailwindcss/tailwind.css');
   require('../styles/global.css');
   require('../styles/variables.css');
} else {
   require('../styles/theme.bs.css');
}

function MyApp({ Component, ...rest }) {
   const { store, props } = wrapper.useWrappedStore(rest);
   const { pageProps } = props;
   const persistor = persistStore(store);

   return (
      <>
         <Provider store={store}>
            <PersistGate loading={'Loading...'} persistor={persistor}>
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
