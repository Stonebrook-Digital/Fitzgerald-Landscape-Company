"use client";

import styles from "./SiteFooter.module.css";

export default function FooterNewsletter() {
  return (
    <form
      className={styles.newsletter}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="footer-email" className="sr-only">
        Email
      </label>
      <input
        id="footer-email"
        type="email"
        placeholder="placeholder@example.com"
        aria-label="Email address"
      />
      <button type="submit">Ipsum</button>
    </form>
  );
}
