"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import GoogleIcon from "@/components/GoogleIcon";
import StarRating from "@/components/StarRating";
import styles from "./TestimonialSlider.module.css";

const AUTO_MS = 8000;

export default function ReviewCardStack({ items }) {
  const [active, setActive] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(null);
  const cardRefs = useRef([]);
  const count = items.length;

  const measureActive = useCallback(() => {
    const el = cardRefs.current[active];
    if (el) {
      setViewportHeight(el.offsetHeight);
    }
  }, [active]);

  useEffect(() => {
    measureActive();
    window.addEventListener("resize", measureActive);
    return () => window.removeEventListener("resize", measureActive);
  }, [measureActive]);

  useEffect(() => {
    const el = cardRefs.current[active];
    if (!el || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(() => measureActive());
    observer.observe(el);
    return () => observer.disconnect();
  }, [active, measureActive]);

  useEffect(() => {
    if (count < 2) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, AUTO_MS);

    return () => window.clearInterval(timer);
  }, [count]);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.viewport}
        style={viewportHeight ? { height: `${viewportHeight}px` } : undefined}
      >
        <div
          className={styles.track}
          style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}
          aria-live="polite"
        >
          {items.map((item, index) => (
            <article
              key={item.id ?? item.author}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={styles.card}
              aria-hidden={index !== active}
            >
              <span className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </span>

              <blockquote className={styles.quoteBlock}>
                <p className={styles.quote}>{item.quote}</p>
              </blockquote>

              {item.image && (
                <div className={styles.reviewImage}>
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? ""}
                    fill
                    sizes="(max-width: 900px) 100vw, 600px"
                    className={styles.reviewImageImg}
                    onLoad={measureActive}
                  />
                </div>
              )}

              <footer className={styles.cardFooter}>
                <div className={styles.reviewer}>
                  <div className={styles.avatarWrap}>
                    <Image
                      src={item.avatar}
                      alt=""
                      width={48}
                      height={48}
                      className={styles.avatar}
                    />
                  </div>
                  <div className={styles.reviewerMeta}>
                    <cite className={styles.author}>{item.author}</cite>
                    <span className={styles.location}>{item.location}</span>
                  </div>
                </div>

                <div className={styles.cardMeta}>
                  <StarRating rating={item.rating ?? 5} size="sm" />
                  <span className={styles.source}>
                    <GoogleIcon size={14} />
                    Google
                  </span>
                  <time className={styles.date} dateTime={item.date}>
                    {item.date}
                  </time>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className={styles.carouselControls} role="tablist" aria-label="Reviews">
          {items.map((item, index) => (
            <button
              key={`dot-${item.id ?? item.author}`}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Review from ${item.author}`}
              className={index === active ? styles.dotActive : styles.dot}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
