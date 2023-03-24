
import Footer from './Footer';
import Navbar from './Navbar';
import SEO from './Seo';

const Layout = ({ seoTitle, seoDesc, seoPath, seoChildren, children }) => {
  return (
    <>
      <SEO title={seoTitle} description={seoDesc} path={seoPath}>
        {seoChildren}
      </SEO>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
