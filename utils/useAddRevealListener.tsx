import { useEffect } from "react";

export default function useAddRevealListener() {
  useEffect(() => {
    revealOrHideElement();
    window.addEventListener("scroll", revealOrHideElement);

    return () => window.removeEventListener("scroll", revealOrHideElement);
  }, []);
}

function revealOrHideElement() {
  // Code inspired by https://alvarotrigo.com/blog/css-animations-scroll/
  const revealElements = document.querySelectorAll(".reveal");

  revealElements.forEach((domElement) => {
    const viewHeight = window.innerHeight;
    const elementTopPosition = domElement.getBoundingClientRect().top;
    const pixelsOfElementInViewBeforeReveal = 100;

    const topOfElementIsWithinViewThreshold =
      elementTopPosition < viewHeight - pixelsOfElementInViewBeforeReveal;

    if (topOfElementIsWithinViewThreshold) {
      domElement.classList.add("active");
    } else {
      domElement.classList.remove("active");
    }
  });
}
