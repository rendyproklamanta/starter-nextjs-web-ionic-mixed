import 'animate.css';
import('tailwindcss/tailwind.css');
import('../styles/global.css');
import('../styles/variables.css');

function MyApp({ Component, ...pageProps }) {
   return (
      <>
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
