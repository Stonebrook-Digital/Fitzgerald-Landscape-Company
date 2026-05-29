import { statsCarousel } from "@/lib/content";
import styles from "./StatsBar.module.css";

export default function StatsBar() {
  const items = [...statsCarousel, ...statsCarousel];

  return (
    <section className={styles.stats} aria-label="Highlights">
      <div className={styles.marquee}>
        <div className={styles.track}>
          {items.map((item, index) => (
            <div
              key={`${item.value}-${item.label}-${index}`}
              className={styles.item}
              aria-hidden={index >= statsCarousel.length}
            >
              <span className={styles.value}>{item.value}</span>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.separator} aria-hidden="true">
                ◆
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
