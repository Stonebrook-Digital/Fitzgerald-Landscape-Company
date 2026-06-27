import SectionHeading from "@/components/SectionHeading";
import GoogleIcon from "@/components/GoogleIcon";
import StarRating from "@/components/StarRating";
import ReviewCardStack from "@/components/ReviewCardStack";
import { googleReviews } from "@/lib/content";
import styles from "./TestimonialSlider.module.css";

export default function TestimonialSlider({ items }) {
  return (
    <section
      id="google-reviews"
      className={styles.section}
      aria-label="Google reviews"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Reviews"
          title="Trusted by South Jersey Homeowners"
          description="Real feedback from neighbors across Woodbury and the surrounding area."
          align="center"
        />

        <div className={styles.layout}>
          <aside className={styles.summary}>
            <a
              href={googleReviews.href}
              className={styles.summaryLink}
              aria-label={`${googleReviews.rating} stars from ${googleReviews.count} Google reviews`}
            >
              <div className={styles.summaryHeader}>
                <GoogleIcon size={32} />
                <span className={styles.summaryLabel}>Google Reviews</span>
              </div>

              <p className={styles.summaryRating}>
                <span className={styles.summaryScore}>{googleReviews.rating}</span>
                <span className={styles.summaryOutOf}>out of 5</span>
              </p>

              <StarRating rating={googleReviews.rating} size="md" />

              <p className={styles.summaryCount}>
                Based on {googleReviews.count} reviews
              </p>

              <p className={styles.summaryNote}>
                Neighbors across Woodbury and Gloucester County trust our crew
                for landscaping, hardscaping, and year-round property care.
              </p>
            </a>
          </aside>

          <ReviewCardStack items={items} />
        </div>
      </div>
    </section>
  );
}
