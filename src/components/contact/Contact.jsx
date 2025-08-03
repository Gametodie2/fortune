import { contactInfo, openingHours } from "../../../constants";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import FeatureItem from "../featureItem/FeatureItem";

import styles from "./Contact.module.scss";

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

const Contact = () => {
  const [contentRef, contentInView] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [mapRef, mapInView] = useIntersectionObserver({ threshold: 0.2 });
  return (
    <section className={styles.contactSection} id="contact">
      <div
        ref={contentRef}
        className={`${styles.contactContent} ${styles.sectionContainer} ${
          contentInView ? styles.isVisible : ""
        }`}
      >
        <h2 className={styles.pageTitle}>Contacteer Ons</h2>
        <p className={styles.introDescription}>
          Heeft u vragen, wilt u een tafel reserveren of een bestelling
          plaatsen? Neem gerust contact met ons op!
        </p>
        <p className={styles.introDescription}>
          U kunt ons enkel bereiken via <b>telefoon</b>. Wij staan klaar om u te
          helpen en uw culinaire ervaring onvergetelijk te maken.
        </p>
        <div className={styles.contactInfoBlock}>
          <address className={styles.addressBlock}>
            {contactInfo.map((item, index) => (
              <FeatureItem key={index} icon={item.icon} text={item.value} />
            ))}
          </address>
        </div>
        <div className={styles.openingHoursBlock}>
          <div className={styles.divider}></div>
          <ul className={styles.hoursList}>
            {openingHours.map((item, index) => (
              <AnimatedItem key={index} delay={index * 75}>
                <li
                  key={index}
                  className={`${styles.hourItem} ${
                    item.hours === "Gesloten" ? styles.closedDay : ""
                  } ${item.day === "FEESTDAGEN" ? styles.highlightItem : ""}`}
                >
                  <span className={styles.hourDay}>{item.day}:</span>{" "}
                  <span className={styles.hourTime}>
                    {item.hours}{" "}
                    {item.hours2 && (
                      <>
                        <br />
                        {item.hours2}
                      </>
                    )}{" "}
                    {item.continuous && (
                      <span className={styles.continuousBadge}>Doorlopend</span>
                    )}
                  </span>
                </li>
              </AnimatedItem>
            ))}
          </ul>
          <div className={styles.divider}></div>
        </div>
      </div>
      <iframe
        ref={mapRef}
        className={`${styles.scaleInItem} ${
          mapInView ? styles.itemIsVisible : ""
        }`}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1051.9509057432917!2d4.138482378910328!3d51.164250235427595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c38e96cdf35041%3A0x65c7d9896672f72e!2sFortune%20Garden!5e0!3m2!1snl!2sbe!4v1754065756833!5m2!1snl!2sbe"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Contact;
