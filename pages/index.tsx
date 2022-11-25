import About from "../components/About";
import Hero from "../components/Hero";
import useAddRevealListener from "../utils/useAddRevealListener";

export default function Home() {
  useAddRevealListener();
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
