import "../styles/globals.scss";
import Layout from "../components/Layout";


function MyApp({ Component, pageProps }) {
  return (
    <Layout title={pageProps.title} nowpage={pageProps.nowpage}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
