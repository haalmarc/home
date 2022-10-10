import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.heroContainer} id="hero">
        <div className={styles.about}>
          <h1>Hei, jeg heter</h1>
          <h2>Marcus Haaland</h2>
          <p>
            Jeg er en systemutvikler, med bakgrunn i psykologi. For tiden jobber
            jeg med å gjøre det lettere å velge klimavennlig
          </p>
          <a className={styles.btn} href="#about">
            Bli kjent
          </a>
        </div>
        <img alt="me" src="./me.png" />
      </div>
    </>
  );
}
