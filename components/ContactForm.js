"use client";

import { useState } from "react";
import { services } from "@/lib/content";
import styles from "./ContactForm.module.css";

const initial = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address";
    if (!form.message.trim()) next.message = "Message is required";
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitted(true);
      setForm(initial);
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitError(error.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status">
        <div className={styles.successIcon}>✓</div>
        <h3>Message Sent</h3>
        <p>
          Thank you for reaching out. We&apos;ll review your request and get back
          to you shortly to schedule your free quote.
        </p>
        <button type="button" onClick={() => setSubmitted(false)}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Your name"
          />
          {errors.name && (
            <span id="name-error" className={styles.error}>
              {errors.name}
            </span>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            placeholder="you@example.com"
          />
          {errors.email && (
            <span className={styles.error}>{errors.email}</span>
          )}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(856) 381-3670"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="service">Service</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="other">Other / Multiple</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          placeholder="Tell us about your property and what you're looking for..."
        />
        {errors.message && (
          <span className={styles.error}>{errors.message}</span>
        )}
      </div>

      <button type="submit" className={styles.submit} disabled={submitting}>
        {submitting ? "Sending..." : "Submit Request"}
      </button>
      {submitError && (
        <p className={styles.error} role="alert">
          {submitError}
        </p>
      )}
    </form>
  );
}
