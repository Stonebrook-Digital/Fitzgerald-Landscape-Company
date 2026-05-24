import { processSteps } from "@/lib/content";
import styles from "./ProcessSteps.module.css";

export default function ProcessSteps() {
  return (
    <div className={styles.grid}>
      {processSteps.map((step, index) => (
        <article key={step.step} className={styles.step}>
          <span className={styles.number}>{step.step}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
          {index < processSteps.length - 1 && (
            <span className={styles.connector} aria-hidden="true" />
          )}
        </article>
      ))}
    </div>
  );
}
