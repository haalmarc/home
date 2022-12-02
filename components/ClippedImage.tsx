import styles from "../styles/ClippedImage.module.css";

interface IProps {
  bottom: boolean;
}

export default function ClippedImage({ bottom }: IProps) {
  return (
    <div className={`${styles.clipper} ${bottom ? styles.bottom : styles.top}`}>
      <img alt="me" src="./me.png" />
    </div>
  );
}
