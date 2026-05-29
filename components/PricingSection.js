import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import { pricing, cta } from "@/lib/content";
import styles from "./PricingSection.module.css";

export default function PricingSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.description}
        />

        <div className={styles.grid}>
          {pricing.highlights.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={index * 90}
              variant="up"
              className={styles.cardReveal}
            >
              <article className={styles.card}>
                <span className={styles.icon} aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={240} className={styles.callout}>
          <p>{pricing.note}</p>
          <Button href={cta.primaryHref} variant="primary">
            {cta.primaryLabel}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
