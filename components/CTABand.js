import Button from "./Button";
import { cta } from "@/lib/content";
import styles from "./CTABand.module.css";

export default function CTABand({
  title = "Ready to Transform Your Property?",
  description,
  primaryHref = cta.primaryHref,
  primaryLabel = cta.primaryLabel,
  secondaryHref = "/gallery",
  secondaryLabel = "View Gallery",
}) {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.inner}>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
          <div className={styles.buttons}>
            <Button href={primaryHref} variant="gold" size="lg">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="secondary" size="lg">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
