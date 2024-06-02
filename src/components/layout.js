
import Head from "next/head";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import { Urbanist } from "next/font/google";

export default function Layout({
  title,
  keywords,
  description,
  children,
  noPadding,
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
      </Head>
      <Navbar />

      <div className={`${noPadding ? "py-9" : "py-9 px-5"} flex-grow `}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Turbham Farms",
  description: "Turbham farms",
  keywords: "Farms",
};
