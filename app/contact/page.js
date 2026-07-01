import Image from "next/image";
import CTAIntakeForm from "@/components/CTAIntakeForm";
import { heroImage, cta } from "@/lib/content";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className={styles.page} id="intake-form" aria-label="Contact">
      <div className={styles.bg} aria-hidden="true">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.formCard}>
          <h1 className={styles.formTitle}>{cta.intakeTitle}</h1>
          <CTAIntakeForm submitLabel={cta.primaryLabel} theme="light" />
        </div>
      </div>
    </section>
  );
}
