import styles from "../styles/About.module.css";

interface Props {
  emoji: JSX.Element;
  text: string;
}

export default function AboutSection({ emoji, text }: Props) {
  return (
    <div className={styles.aboutSection}>
      <span>{emoji}</span>
      <p>{text}</p>
    </div>
  );
}
