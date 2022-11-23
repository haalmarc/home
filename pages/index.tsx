import About from "../components/About";
import Hero from "../components/Hero";
import RevealWrapper from "../components/RevealWrapper";

export default function Home() {
  return (
    <>
      <Hero />
      <RevealWrapper>
        <About />
      </RevealWrapper>
    </>
  );
}
