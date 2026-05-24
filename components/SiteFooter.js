import Link from "next/link";
import Image from "next/image";
import {
  navLinks,
  siteName,
  placeholderContact,
  lorem,
} from "@/lib/content";
import FooterNewsletter from "./FooterNewsletter";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <Link href="/">
                <Image
                  src="/FFF_Fitzgerald_LO-01.jpg"
                  alt={siteName}
                  width={180}
                  height={50}
                  className={styles.logo}
                />
              </Link>
              <p>{lorem.medium}</p>
            </div>

            <div>
              <h3>Navigation</h3>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Lorem Contact</h3>
              <ul className={styles.contactList}>
                <li>
                  <a href={`tel:${placeholderContact.phone.replace(/\D/g, "")}`}>
                    {placeholderContact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${placeholderContact.email}`}>
                    {placeholderContact.email}
                  </a>
                </li>
                <li>{placeholderContact.address}</li>
                <li>{placeholderContact.hours}</li>
              </ul>
            </div>

            <div>
              <h3>Dolor Newsletter</h3>
              <p className={styles.newsletterText}>{lorem.short}</p>
              <FooterNewsletter />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>
            &copy; {year} {siteName}. Lorem ipsum dolor sit amet.
          </p>
          <div className={styles.legal}>
            <span>Lorem</span>
            <span>Ipsum</span>
            <span>Dolor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
