import Link from "next/link";
import Image from "next/image";
import { siteName, contact, cta } from "@/lib/content";
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
                  src="/FFF_Fitzgerald_LO.png"
                  alt={siteName}
                  width={200}
                  height={56}
                  className={styles.logo}
                />
              </Link>
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
