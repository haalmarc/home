import styles from "../styles/Layout.module.css";
import SectionTitle from "./SectionTitle";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import ClippedImage from "./ClippedImage";

export default function Footer() {
  return (
    <footer className="reveal">
      <SectionTitle
        title="Lurer du på noe eller bare ønsker å si hei?"
        id="contact"
      />

      <p>
        Send en melding på{" "}
        <a
          href="https://www.linkedin.com/in/marcus-haaland-3706b3162/"
          target="__blank"
        >
          LinkedIn
        </a>
        .
      </p>
      <div className={styles.social}>
        <a
          href="https://www.linkedin.com/in/marcus-haaland-3706b3162/"
          target="__blank"
        >
          <FaLinkedin size={50} />
        </a>
        <a href="https://github.com/haalmarc/" target="__blank">
          <FaGithub size={50} />
        </a>
        <a href="https://medium.com/@marcushaaland" target="__blank">
          <FaMedium size={50} />
        </a>
      </div>
      <ClippedImage bottom={true} />
    </footer>
  );
}
