import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cote from "@/components/Cote";
import Router from "next/router";

export default function App({ Component, pageProps }) {
 

  return (
    <>
      <Header />
      <Cote />
      <Component {...pageProps} />

      <Footer />
    </>
  );
}
