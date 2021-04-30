import "../styles/globals.scss";
import Layout from "../components/Layout";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
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
  );
}

export default MyApp;
