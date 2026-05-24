import styles from "./SectionHeading.module.css";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  return (
    <div
      className={`${styles.wrap} ${styles[align]} ${light ? styles.light : ""}`}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
