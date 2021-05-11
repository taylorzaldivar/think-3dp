import "../styles/globals.scss";
import Layout from "../components/Layout";
import { DefaultSeo } from "next-seo";
import GoogleTagManager from "../components/GoogleTagManager";

function MyApp({ Component, pageProps }) {
  return (
    <GoogleTagManager>
      <Layout>
        <DefaultSeo
          titleTemplate={`%s | Think3DP`}
          defaultTitle="Think3DP | 3D Printing News"
          openGraph={{
            locale: "en_US",
            site_name: "Think3DP",
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </GoogleTagManager>
  );
}

export default MyApp;
