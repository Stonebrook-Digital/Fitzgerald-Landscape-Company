"use client";

import { useState } from "react";
import styles from "./CTABand.module.css";

const initial = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function CTAIntakeForm({
  submitLabel = "Request a Free Estimate",
  theme = "dark",
}) {
  const isLight = theme === "light";
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address";
    if (!form.phone.trim()) next.phone = "Phone number is required";
    if (!form.subject.trim()) next.subject = "Subject is required";
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setSubmitted(true);
    setForm(initial);
  };

  if (submitted) {
    return (
      <div
        className={`${styles.formSuccess} ${isLight ? styles.formSuccessLight : ""}`}
        role="status"
      >
        <div className={styles.formSuccessIcon} aria-hidden="true">
          ✓
        </div>
        <h3>Request received</h3>
        <p>
          Thank you for reaching out. We&apos;ll review your details and get back
          to you shortly.
        </p>
        <button type="button" onClick={() => setSubmitted(false)}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      className={`${styles.form} ${isLight ? styles.formLight : ""}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="cta-name">Name</label>
          <input
            id="cta-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            placeholder="Your name"
          />
          {errors.name && <span className={styles.formError}>{errors.name}</span>}
        </div>
        <div className={styles.formField}>
          <label htmlFor="cta-email">Email</label>
          <input
            id="cta-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            placeholder="you@example.com"
          />
          {errors.email && <span className={styles.formError}>{errors.email}</span>}
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="cta-phone">Phone</label>
          <input
            id="cta-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            placeholder="(856) 555-1234"
          />
          {errors.phone && <span className={styles.formError}>{errors.phone}</span>}
        </div>
        <div className={styles.formField}>
          <label htmlFor="cta-subject">Subject</label>
          <input
            id="cta-subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            aria-invalid={!!errors.subject}
            placeholder="Lawn care, patio project, etc."
          />
          {errors.subject && (
            <span className={styles.formError}>{errors.subject}</span>
          )}
        </div>
      </div>

      <div className={styles.formField}>
        <label htmlFor="cta-message">Message</label>
        <textarea
          id="cta-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your property and what you need..."
        />
      </div>

      <button type="submit" className={styles.formSubmit}>
        {submitLabel}
      </button>
    </form>
  );
}
