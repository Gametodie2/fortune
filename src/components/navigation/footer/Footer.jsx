import { navLinks, contactInfo, socials } from "../../../../constants";

import styles from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <section className={styles.about}>
          <div className={styles.title}>
            <img src="/images/logo.jpg" alt="logo" className={styles.logo} />
            <h4>Fortune Garden</h4>
          </div>
          <p>
            Ontdek de Kantonese keuken in het hart van het Waasland, op de Grote
            Markt in Sint-Niklaas, vlak bij het stadhuis. Al 20 jaar een
            vertrouwde naam.
          </p>
          <ul>
            {socials.map((social) => (
              <li key={social.name}>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <img src={social.icon} alt={social.name} />
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.links}>
          <section className={styles.quickLinks}>
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.contactInfo}>
            <h4>Contact Info</h4>
            <ul>
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <span>{info.label}:</span>
                  <span>{info.value}</span>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </div>
      <div className={styles.footerBottom}>
        <p>
          © {year} Fortune Garden. All rights reserved. | By{" "}
          <a
            href="https://yanidegrande.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Degrande Yani
          </a>
        </p>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
