import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import styles from "./Menu.module.scss";

const AnimatedItem = ({ children, delay = 0, className = "" }) => {
  const [ref, isInView] = useIntersectionObserver({ threshold: 0.2 });
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

const Menu = () => {
  const [textRef, textInView] = useIntersectionObserver({ threshold: 0.2 });
  return (
    <section className={styles.menuSection} id="menu">
      <div
        ref={textRef}
        className={`${styles.sectionContainer} ${
          textInView ? styles.isVisible : ""
        }`}
      >
        <h2>Welkom bij Fortune Garden</h2>
        <p>
          Ontdek de Kantonese keuken in het hart van het Waasland. Bij ons kunt
          u terecht voor een snelle hap, uitgebreid tafelen met vrienden of
          familie, of gerechten om af te halen. Bekijk hieronder een voorsmaakje
          van ons menu, inclusief rijsttafels en speciale gerechten.
        </p>
      </div>
      <div className={styles.menuGrid}>
        <AnimatedItem className={styles.menuCard} delay={100}>
          <img src="/images/icons/chefheart.svg" alt="Chef's Heart" />
          <h3 className={styles.cardTitle}>Dine-In Menu</h3>
          <p className={styles.cardDescription}>
            Geniet van onze authentieke Kantonese gerechten in ons gezellige
            restaurant. Ontdek onze rijsttafels en speciale gerechten, perfect
            voor een uitgebreide maaltijd.
          </p>
          <a
            href="/documents/Menukaart restaurant website 12-2021.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.menuButton}
          >
            Bekijk Dine-In Menu
          </a>
        </AnimatedItem>

        <AnimatedItem className={styles.menuCard} delay={250}>
          <img src="/images/icons/bag.svg" alt="Takeaway" />
          <h3 className={styles.cardTitle}>Takeaway Menu</h3>
          <p className={styles.cardDescription}>
            Bestel onze heerlijke gerechten om mee te nemen en thuis te
            genieten. Bekijk ons uitgebreide aanbod aan meeneemgerechten,
            inclusief speciale opties.
          </p>
          <a
            href="/documents/AFHAALLIJST FORTUNE GARDEN 12-2022.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.menuButton}
          >
            Bekijk Takeaway Menu
          </a>
        </AnimatedItem>
      </div>
    </section>
  );
};

export default Menu;
