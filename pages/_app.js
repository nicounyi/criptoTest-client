import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/main.scss";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import Layout from "../components/layout";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>RipioScan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-8 mainBox">
            <div className="row col-12">
              <SearchBar/>
            </div>
            <div className="row col-12">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MyApp;
