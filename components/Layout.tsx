import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marcus Haaland</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
