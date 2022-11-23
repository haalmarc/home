import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Head from "next/head";
import RevealWrapper from "./RevealWrapper";

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marcus Haaland</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/faviconHM.png" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <RevealWrapper>
        <Footer />
      </RevealWrapper>
    </div>
  );
}
