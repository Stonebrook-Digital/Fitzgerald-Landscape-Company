import Link from "next/link";
import Image from "next/image";
import {
  navLinks,
  siteName,
  contact,
  valueProposition,
  headerQuote,
  cta,
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
              <p>{valueProposition.text}</p>
              <blockquote className={styles.quote}>
                <p>{headerQuote}</p>
              </blockquote>
            </div>

            <div>
              <h3>Navigation</h3>
              <ul>
                {navLinks.slice(0, 2).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/services">Services</Link>
                </li>
                {navLinks.slice(2).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Contact</h3>
              <ul className={styles.contactList}>
                <li>
                  <a href={`tel:${contact.phone.replace(/\D/g, "")}`}>
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
                <li>{contact.address}</li>
                <li>{contact.hours}</li>
              </ul>
              <Link href={cta.primaryHref} className={styles.footerCta}>
                {cta.primaryLabel}
              </Link>
            </div>

            <div>
              <h3>Stay Updated</h3>
              <p className={styles.newsletterText}>
                Seasonal tips, promotions, and project highlights from our crew.
              </p>
              <FooterNewsletter />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>
            &copy; {year} {siteName}. All rights reserved.
          </p>
          <div className={styles.legal}>
            <span>{contact.address}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
