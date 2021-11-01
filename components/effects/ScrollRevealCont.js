import { FC, useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealCont = ({ children, move }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: 400,
        opacity: 0,
        origin:
          move === "left"
            ? "left"
            : move === "right"
            ? "right"
            : move === "top"
            ? "top"
            : "bottom",
        distance: "40px",
      });
    }
  }, [sectionRef]);
  return <section ref={sectionRef}>{children}</section>;
};

export default ScrollRevealCont;