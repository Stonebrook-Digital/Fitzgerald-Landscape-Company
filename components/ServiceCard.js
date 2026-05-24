import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ title, description, image, href = "/services" }) {
  return (
    <article className={styles.card}>
      <Link href={href} className={styles.imageWrap}>
        <Image src={image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" />
        <div className={styles.imageOverlay} />
      </Link>
      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href} className={styles.link}>
          Lorem more
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
