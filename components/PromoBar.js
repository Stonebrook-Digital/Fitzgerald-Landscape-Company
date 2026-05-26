import Link from "next/link";
import { seasonalPromo } from "@/lib/content";
import styles from "./PromoBar.module.css";

export default function PromoBar() {
  return (
    <div
      className={`${styles.promo} promo-bar`}
      role="region"
      aria-label="Seasonal promotion"
    >
      <div className={`container ${styles.inner}`}>
        <p>{seasonalPromo.message}</p>
        <Link href={seasonalPromo.cta.href} className={styles.link}>
          {seasonalPromo.cta.label}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
