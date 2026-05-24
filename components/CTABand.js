import Button from "./Button";
import styles from "./CTABand.module.css";

export default function CTABand({
  title = "Lorem Ipsum Dolor Sit Amet?",
  description,
  primaryHref = "/contact",
  primaryLabel = "Lorem Consult",
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
