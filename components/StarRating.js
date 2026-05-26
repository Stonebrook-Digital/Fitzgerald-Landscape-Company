import styles from "./StarRating.module.css";

export default function StarRating({ rating = 5, max = 5, size = "md" }) {
  const full = Math.round(rating);
  return (
    <div
      className={`${styles.stars} ${styles[size]}`}
      role="img"
      aria-label={`${rating} out of ${max} stars`}
    >
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={i < full ? styles.filled : styles.empty}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}
