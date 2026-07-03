import Button from "./Button";
import CTAIntakeForm from "./CTAIntakeForm";
import { cta } from "@/lib/content";
import styles from "./CTABand.module.css";

export default function CTABand({
  title = "Ready to Transform Your Property?",
  description,
  primaryHref = cta.primaryHref,
  primaryLabel = cta.primaryLabel,
  secondaryHref = "/contact",
  secondaryLabel = "Contact Us",
  withForm = false,
}) {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={`${styles.inner} ${withForm ? styles.innerWithForm : ""}`}>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
          {withForm ? (
            <CTAIntakeForm submitLabel={primaryLabel} />
          ) : (
            <div className={styles.buttons}>
              <Button href={primaryHref} variant="gold" size="lg">
                {primaryLabel}
              </Button>
              <Button href={secondaryHref} variant="secondary" size="lg">
                {secondaryLabel}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
