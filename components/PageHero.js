import Image from "next/image";
import Button from "./Button";
import styles from "./PageHero.module.css";

export default function PageHero({
  title,
  subtitle,
  image,
  size = "default",
  primaryCta,
  secondaryCta,
  children,
}) {
  return (
    <section className={`${styles.hero} ${styles[size]}`}>
      <div className={styles.bg}>
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        {subtitle && (
          <span className={`${styles.eyebrow} animate-fade-up`}>{subtitle}</span>
        )}
        <h1 className={`${styles.title} animate-fade-up animate-delay-1`}>
          {title}
        </h1>
        {children}
        {(primaryCta || secondaryCta) && (
          <div className={`${styles.ctas} animate-fade-up animate-delay-2`}>
            {primaryCta && (
              <Button href={primaryCta.href} variant="gold" size="lg">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
