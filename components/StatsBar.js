"use client";

import { useState, useEffect, useCallback } from "react";
import { statsCarousel } from "@/lib/content";
import styles from "./StatsBar.module.css";

const INTERVAL_MS = 4500;

export default function StatsBar() {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % statsCarousel.length);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next, reducedMotion]);

  return (
    <section className={styles.stats} aria-label="Highlights" aria-live="polite">
      <div className="container">
        <div className={styles.carousel}>
          <div className={styles.track}>
            {statsCarousel.map((item, index) => (
              <div
                key={`${item.value}-${item.label}`}
                className={`${styles.slide} ${index === active ? styles.slideActive : ""}`}
                aria-hidden={index !== active}
              >
                <span className={styles.value}>{item.value}</span>
                <span className={styles.label}>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.dots} role="tablist" aria-label="Highlight slides">
            {statsCarousel.map((item, index) => (
              <button
                key={`dot-${item.label}`}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`${item.value} ${item.label}`}
                className={index === active ? styles.dotActive : ""}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
