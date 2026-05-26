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
  quote,
  sideImage,
  children,
}) {
  const isSplit = Boolean(quote && sideImage);

  return (
    <section
      className={`${styles.hero} ${styles[size]} ${isSplit ? styles.split : ""}`}
    >
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

      <div className={`container ${styles.contentWrap}`}>
        <div className={`${styles.layout} ${isSplit ? styles.layoutSplit : ""}`}>
          <div className={styles.main}>
            {subtitle && (
              <span className={`${styles.eyebrow} animate-fade-up`}>
                {subtitle}
              </span>
            )}
            <h1 className={`${styles.title} animate-fade-up animate-delay-1`}>
              {title}
            </h1>
            {quote && (
              <blockquote
                className={`${styles.quote} animate-fade-up animate-delay-2`}
              >
                <p>{quote}</p>
              </blockquote>
            )}
            {children}
            {(primaryCta || secondaryCta) && (
              <div
                className={`${styles.ctas} animate-fade-up ${quote ? "animate-delay-3" : "animate-delay-2"}`}
              >
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

          {isSplit && (
            <div className={`${styles.side} animate-fade-up animate-delay-2`}>
              <div className={styles.sideFrame}>
                <Image
                  src={sideImage}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 85vw, 360px"
                  className={styles.sideImage}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
