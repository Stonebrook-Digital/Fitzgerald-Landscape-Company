import { stats } from "@/lib/content";
import styles from "./StatsBar.module.css";

export default function StatsBar() {
  return (
    <section className={styles.stats} aria-label="Statistics">
      <div className="container">
        <ul className={styles.grid}>
          {stats.map((item) => (
            <li key={item.label}>
              <span className={styles.value}>{item.value}</span>
              <span className={styles.label}>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
