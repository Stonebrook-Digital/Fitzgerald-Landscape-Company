"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import GoogleIcon from "@/components/GoogleIcon";
import StarRating from "@/components/StarRating";
import { googleReviews } from "@/lib/content";
import styles from "./TestimonialSlider.module.css";

export default function TestimonialSlider({ items }) {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (index === active || isAnimating) return;
      setIsAnimating(true);
      setActive(index);
    },
    [active, isAnimating]
  );

  const next = useCallback(() => {
    goTo((active + 1) % items.length);
  }, [active, items.length, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + items.length) % items.length);
  }, [active, items.length, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    if (!isAnimating) return;
    const t = setTimeout(() => setIsAnimating(false), 900);
    return () => clearTimeout(t);
  }, [isAnimating, active]);

  const activeItem = items[active];

  return (
    <section
      id="google-reviews"
      className={styles.section}
      aria-label="Google reviews"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Reviews"
          title="Trusted by Brooklyn Homeowners"
          description="Real feedback from neighbors who've worked with our crew."
        />

        <a
          href={googleReviews.href}
          className={styles.googleBadge}
          aria-label={`${googleReviews.rating} stars from ${googleReviews.count} Google reviews`}
        >
          <GoogleIcon size={28} />
          <div className={styles.badgeText}>
            <span className={styles.badgeLabel}>
              <strong>{googleReviews.rating}</strong> on Google
            </span>
            <StarRating rating={googleReviews.rating} size="sm" />
            <span className={styles.badgeCount}>
              Based on {googleReviews.count} reviews
            </span>
          </div>
        </a>

        <div className={styles.slider}>
          <div className={styles.viewport}>
            <div
              className={styles.track}
              style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}
              aria-live="polite"
            >
              {items.map((item, index) => (
                <article
                  key={item.id ?? item.author}
                  className={styles.card}
                  aria-hidden={index !== active}
                >
                  <div className={styles.cardInner}>
                    <div className={styles.reviewer}>
                      <div className={styles.avatarWrap}>
                        <Image
                          src={item.avatar}
                          alt=""
                          width={72}
                          height={72}
                          className={styles.avatar}
                        />
                      </div>
                      <div className={styles.reviewerMeta}>
                        <StarRating rating={item.rating ?? 5} size="sm" />
                        <cite className={styles.author}>{item.author}</cite>
                        <span className={styles.location}>{item.location}</span>
                      </div>
                    </div>

                    <blockquote className={styles.quoteBlock}>
                      <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
                    </blockquote>

                    <footer className={styles.cardFooter}>
                      <span className={styles.source}>
                        <GoogleIcon size={16} />
                        Posted on Google
                      </span>
                      <time className={styles.date} dateTime={item.date}>
                        {item.date}
                      </time>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.faceRow} aria-label="Select a review">
            {items.map((item, index) => (
              <button
                key={item.id ?? item.author}
                type="button"
                className={`${styles.faceBtn} ${index === active ? styles.faceActive : ""}`}
                aria-label={`Review from ${item.author}`}
                aria-current={index === active}
                onClick={() => goTo(index)}
              >
                <Image
                  src={item.avatar}
                  alt=""
                  width={44}
                  height={44}
                  className={styles.faceImg}
                />
              </button>
            ))}
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              onClick={prev}
              aria-label={`Previous review, ${activeItem.author}`}
            >
              ←
            </button>
            <div className={styles.dots} role="tablist" aria-label="Review slides">
              {items.map((item, index) => (
                <button
                  key={`dot-${item.id ?? item.author}`}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Review from ${item.author}`}
                  className={index === active ? styles.dotActive : ""}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
            <button type="button" onClick={next} aria-label="Next review">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
