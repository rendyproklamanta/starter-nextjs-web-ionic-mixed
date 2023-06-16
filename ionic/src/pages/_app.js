import 'animate.css';
import '../styles/global.css';
import '../styles/tailwind.css';
import '../styles/variables.css';
import { Provider } from 'react-redux';
import { wrapper } from '../store/store';


function MyApp({ Component, ...rest }) {
   const { store, props } = wrapper.useWrappedStore(rest);
   const { pageProps } = props;
   return (
      <>
         <Provider store={store}>
            <Component {...pageProps} />
         </Provider>
      </>
   );
}

export default MyApp;
