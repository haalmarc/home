import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
