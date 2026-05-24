"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./TestimonialSlider.module.css";

export default function TestimonialSlider({ items }) {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className={styles.section} aria-label="Testimonials">
      <div className="container">
        <div className={styles.slider}>
          <div className={styles.track}>
            {items.map((item, index) => (
              <blockquote
                key={item.author}
                className={`${styles.slide} ${index === active ? styles.active : ""}`}
                aria-hidden={index !== active}
              >
                <p className={styles.quote}>&ldquo;{item.quote}&rdquo;</p>
                <footer>
                  <cite className={styles.author}>{item.author}</cite>
                  <span className={styles.role}>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className={styles.controls}>
            <button type="button" onClick={prev} aria-label="Previous testimonial">
              ←
            </button>
            <div className={styles.dots} role="tablist" aria-label="Testimonial slides">
              {items.map((item, index) => (
                <button
                  key={item.author}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Testimonial ${index + 1}`}
                  className={index === active ? styles.dotActive : ""}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
            <button type="button" onClick={next} aria-label="Next testimonial">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
