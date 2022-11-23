import { useEffect, useRef } from "react";

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    revealOrHideElement(ref.current);

    function revealListener() {
      revealOrHideElement(ref.current);
    }

    window.addEventListener("scroll", revealListener);
    return () => window.removeEventListener("scroll", revealListener);
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}

function revealOrHideElement(domElement: HTMLDivElement) {
  if (!domElement) return;

  // Code inspired by https://alvarotrigo.com/blog/css-animations-scroll/
  const viewHeightPosition = window.innerHeight;
  const elementTopPosition = domElement.getBoundingClientRect().top;
  const pixelsOfElementInViewBeforeReveal = 100;

  const topOfElementIsWithinViewThreshold =
    elementTopPosition < viewHeightPosition - pixelsOfElementInViewBeforeReveal;

  if (topOfElementIsWithinViewThreshold) {
    domElement.classList.add("active");
  } else {
    domElement.classList.remove("active");
  }
}
