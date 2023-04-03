import 'animate.css';
import '../styles/global.css';
import '../styles/tailwind.css';
import '../styles/variables.css';


function MyApp({ Component, ...pageProps }) {
   return (
      <>
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
