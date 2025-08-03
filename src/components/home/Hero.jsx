// Hero.jsx
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
// import { useMediaQuery } from "react-responsive";

import styles from "./Hero.module.scss";

const Hero = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const buttonContainerRef = useRef(null);

  useGSAP(
    () => {
      if (!isMounted) {
        return; // Stop hier als de component nog niet opnieuw gerenderd is
      }

      document.fonts.ready.then(() => {
        const heroSplit = new SplitText(titleRef.current, {
          type: "chars, words",
        });

        // Add class for styling the gradient text
        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        // Animate the characters into view
        gsap.from(heroSplit.chars, {
          yPercent: 100,
          duration: 1.8,
          ease: "expo.out",
          stagger: 0.06,
        });
      });

      // --- ROTATING BUTTON SETUP ---
      const buttonContainer = buttonContainerRef.current;
      const mainButton = buttonContainer.querySelector(
        `.${styles.mainCircleButton}`
      );
      const rotatingTextSvg = buttonContainer.querySelector(
        `.${styles.rotatingTextSvg}`
      );

      // ScrollTrigger to fade in the button
      gsap.to(buttonContainer, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "body",
          start: "top bottom-=100",
          once: true,
        },
      });

      // Continuous rotation animation for the SVG text
      const rotationAnim = gsap.to(rotatingTextSvg, {
        rotation: 360,
        transformOrigin: "center center",
        duration: 15,
        ease: "none",
        repeat: -1,
      });

      // --- EVENT LISTENERS FOR HOVER ---
      // These functions will handle the hover effects.
      const onEnter = () => {
        gsap.to(mainButton, { scale: 1.05, duration: 0.3, ease: "power1.out" });
        rotationAnim.pause(); // Pause the continuous rotation
      };

      const onLeave = () => {
        gsap.to(mainButton, { scale: 1, duration: 0.3, ease: "power1.out" });
        rotationAnim.play(); // Resume the continuous rotation
      };

      // Add event listeners and ensure they are cleaned up automatically by GSAP
      buttonContainer.addEventListener("mouseenter", onEnter);
      buttonContainer.addEventListener("mouseleave", onLeave);

      // Return a cleanup function. GSAP's useGSAP will automatically
      // run this when the component unmounts, preventing memory leaks.
      return () => {
        buttonContainer.removeEventListener("mouseenter", onEnter);
        buttonContainer.removeEventListener("mouseleave", onLeave);
      };
    },
    [isMounted],
    { scope: heroRef } // Scope the GSAP context to the main container
  );

  return (
    <>
      <div className={styles.noisyOverlay}></div>
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroContent}>
          <h1 ref={titleRef}>Fortune Garden</h1>
        </div>

        <div
          className={styles.rotatingButtonContainer}
          ref={buttonContainerRef}
        >
          {/* SVG voor de draaiende tekst */}
          <svg className={styles.rotatingTextSvg} viewBox="0 0 150 150">
            <path
              id="circlePath"
              fill="none"
              stroke="none"
              d="M 75, 75 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />
            <text
              className={styles.rotatingTextPath}
              fill="white"
              fontSize="12"
              letterSpacing="1"
            >
              <textPath href="#circlePath">
                Boek uw tafel vandaag • Bel ons • 03/778.06.26 •
              </textPath>
            </text>
          </svg>

          {/* De centrale, klikbare knop */}
          <a
            href="#contact"
            className={styles.mainCircleButton}
            aria-label="Boek nu een tafel"
          >
            <span>Reserveer nu</span>
          </a>
        </div>

        <div className={styles.imageContainer}>
          <img src="/images/ai_hero.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Hero;
