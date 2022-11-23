import styles from "../styles/About.module.css";

interface IProps {
  emoji: JSX.Element;
  text: string;
}

export default function AboutSection({ emoji, text }: IProps) {
  return (
    <div className={styles.aboutSection}>
      <span>{emoji}</span>
      <p>{text}</p>
    </div>
  );
}
