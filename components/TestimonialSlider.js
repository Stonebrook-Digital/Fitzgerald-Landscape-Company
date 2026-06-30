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
        <div className={styles.layout}>
          <aside className={styles.summary}>
            <div className={styles.summaryInner}>
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

              <p className={styles.summaryNote}>{googleReviews.tagline}</p>
            </div>
          </aside>

          <div className={styles.reviewsColumn}>
            <ReviewCardStack items={items} />
            <a
              href={googleReviews.externalHref}
              className={styles.moreReviewsBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {googleReviews.moreLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
