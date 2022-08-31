import Link from "../node_modules/next/link";
import styles from "../styles/Layout.module.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Hjem</a>
        </Link>
        <div className={styles.links}>
          <Link href="/posts">
            <a>Blogg</a>
          </Link>
          <Link href="/#contact">
            <a className={styles.btnSecondary}>Ta kontakt</a>
          </Link>
        </div>
      </nav>
    </>
  );
}
