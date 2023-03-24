import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import '../styles/bootstrap.css';
import Aos from 'aos';
import Layout from '../components/layout';

const MyApp = ({ Component, pageProps }) => {
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
