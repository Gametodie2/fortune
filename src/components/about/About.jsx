import FeatureItem from "../featureItem/FeatureItem";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

import styles from "./About.module.scss";

const AnimatedItem = ({ children, delay = 0, className = "" }) => {
  // Elke 'AnimatedItem' krijgt zijn eigen observer.
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${className} ${styles.scaleInItem} ${
        isInView ? styles.itemIsVisible : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const About = () => {
  const [titleRef, titleInView] = useIntersectionObserver({ threshold: 0.5 });
  const [textRef, textInView] = useIntersectionObserver({ threshold: 0.2 });
  const [featuresRef, featuresInView] = useIntersectionObserver({
    threshold: 0.3,
  });
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutText}>
        <h2
          ref={titleRef}
          className={`${styles.animateOnScroll} ${
            titleInView ? styles.isVisible : ""
          }`}
        >
          Over Ons
        </h2>
        <div ref={textRef}>
          <p
            className={`${styles.aboutDescription} ${styles.animateOnScroll} ${
              textInView ? styles.isVisible : ""
            }`}
          >
            Welkom bij Fortune Garden, uw Chinees restaurant gespecialiseerd in
            de Kantonese keuken. Al meer dan 20 jaar zijn wij een vaste waarde
            op de Grote Markt in Sint-Niklaas, vlak bij het prachtige stadhuis
            in het hart van het Waasland.
          </p>
          <p
            className={`${styles.aboutDescription} ${styles.animateOnScroll} ${
              textInView ? styles.isVisible : ""
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            U kunt bij ons terecht voor afhaalgerechten, een snelle hap of om
            uitgebreid te tafelen met vrienden en familie. Op onze website
            krijgt u alvast een voorsmaakje van ons menu: ontdek onze
            rijsttafels, speciale gerechten en het volledige aanbod van zowel
            restaurant- als meeneemgerechten.
          </p>
          <p
            className={`${styles.aboutDescription} ${styles.animateOnScroll} ${
              textInView ? styles.isVisible : ""
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Wilt u een tafel reserveren of telefonisch bestellen? Neem gerust
            contact met ons op. Wij verwelkomen u graag voor een onvergetelijke
            culinaire ervaring!
          </p>
        </div>
        <div className={styles.aboutFeaturesContainer} ref={featuresRef}>
          <div
            className={`${styles.animateOnScroll} ${
              featuresInView ? styles.isVisible : ""
            }`}
          >
            <FeatureItem
              icon="/images/icons/chefshat.svg"
              text="Authentieke Kantonese gerechten bereid door ervaren chefs"
            />
          </div>
          <div
            className={`${styles.animateOnScroll} ${
              featuresInView ? styles.isVisible : ""
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <FeatureItem
              icon="/images/icons/leaf.svg"
              text="Verse ingrediënten voor de beste smaak"
            />
          </div>
          <div
            className={`${styles.animateOnScroll} ${
              featuresInView ? styles.isVisible : ""
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <FeatureItem
              icon="/images/icons/heart.svg"
              text="Warme, gastvrije sfeer voor familiedining"
            />
          </div>
        </div>
      </div>
      <section className={styles.aboutGridSection}>
        <div className={`${styles.topGrid} top-grid`}>
          {/* We vervangen de divs door onze nieuwe component en geven een 'delay' mee */}
          <AnimatedItem className={styles.gridItemCol3} delay={0}>
            <div className={styles.noisy} />
            <img src="/images/abt1.jpg" alt="Sfeervol interieur" />
          </AnimatedItem>

          <AnimatedItem className={styles.gridItemCol6} delay={150}>
            <div className={styles.noisy} />
            <img src="/images/abt2.jpg" alt="Close-up gerecht" />
          </AnimatedItem>

          <AnimatedItem className={styles.gridItemCol3} delay={300}>
            <div className={styles.noisy} />
            <img src="/images/abt5.jpg" alt="Detail decoratie" />
          </AnimatedItem>
        </div>
        <div className={`${styles.bottomGrid} bottom-grid`}>
          <AnimatedItem className={styles.gridItemCol8} delay={100}>
            <div className={styles.noisy} />
            <img src="/images/abt3.jpg" alt="Overzicht gerechten" />
          </AnimatedItem>

          <AnimatedItem className={styles.gridItemCol4} delay={250}>
            <div className={styles.noisy} />
            <img src="/images/logo.jpg" alt="Logo Fortune Garden" />
          </AnimatedItem>
        </div>
      </section>
    </section>
  );
};

export default About;
