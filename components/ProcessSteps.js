import { processSteps } from "@/lib/content";
import ScrollReveal from "@/components/ScrollReveal";
import styles from "./ProcessSteps.module.css";

export default function ProcessSteps() {
  return (
    <div className={styles.grid}>
      {processSteps.map((step, index) => (
        <ScrollReveal
          as="article"
          key={step.step}
          delay={index * 100}
          variant="up"
          className={styles.step}
        >
          <span className={styles.number}>{step.step}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
          {index < processSteps.length - 1 && (
            <span className={styles.connector} aria-hidden="true" />
          )}
        </ScrollReveal>
      ))}
    </div>
  );
}
