import { AppProps } from "next/dist/next-server/lib/router/router";
import Header from "../components/layout/Header";
import Footer from "../modules/Home/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen w-full h-full flex flex-col justify-start items-center dark:bg-gray-900 transition duration-500">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
