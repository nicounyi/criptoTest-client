import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/main.scss"
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import Layout from "../components/layout";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>RipioScan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
