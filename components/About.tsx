import AboutSection from "./AboutSection";
import styles from "../styles/About.module.css";
import { FaHandSpock, FaHammer, FaSchool } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <SectionTitle title="Om meg" id="about" />

      <div className={styles.aboutSections}>
        <AboutSection
          emoji={<FaHandSpock />}
          text="Jeg heter Marcus Haaland og er en systemutvikler med bakgrunn i
        psykologi. På fritiden liker jeg å klatre og lage mat."
        />

        <AboutSection
          emoji={<FaHammer />}
          text="For tiden jobber jeg som konsulent i Bekk, på oppdrag i Enova. Der jobber jeg med å gjøre det lettere å søke og å
          behandle saker om støtte for klimavennlige tiltak. Dette løser jeg med .NET, Razor og Vue."
        />

        <AboutSection
          emoji={<FaSchool />}
          text="Jeg har en bachelor i informatikk og en bachelor i psykologi fra NTNU. 
          På informatikk lærte jeg å programmere løsninger for og med folk. 
          Psykologibakgrunnen bidrar godt inn i samarbeid og forståelse av hvilket behov løsningen skal dekke. 
        "
        />
      </div>
    </div>
  );
}
