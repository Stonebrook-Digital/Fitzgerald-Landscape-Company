"use client";

import { useState } from "react";
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
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Lorem ipsum required";
    if (!form.email.trim()) next.email = "Lorem ipsum required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Dolor sit invalid";
    if (!form.message.trim()) next.message = "Lorem ipsum required";
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
      <div className={styles.success} role="status">
        <div className={styles.successIcon}>✓</div>
        <h3>Lorem Ipsum Sent</h3>
        <p>
          Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
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
          <label htmlFor="name">Lorem Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Lorem Ipsum"
          />
          {errors.name && (
            <span id="name-error" className={styles.error}>
              {errors.name}
            </span>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Ipsum Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            placeholder="placeholder@example.com"
          />
          {errors.email && (
            <span className={styles.error}>{errors.email}</span>
          )}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone">Dolor Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(000) 000-0000"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="service">Sit Service</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
          >
            <option value="">Select lorem...</option>
            <option value="design">Lorem Design</option>
            <option value="install">Ipsum Installation</option>
            <option value="hardscape">Dolor Hardscape</option>
            <option value="maintenance">Sit Maintenance</option>
            <option value="other">Amet Other</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Consectetur Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          placeholder="Lorem ipsum dolor sit amet..."
        />
        {errors.message && (
          <span className={styles.error}>{errors.message}</span>
        )}
      </div>

      <button type="submit" className={styles.submit}>
        Submit Lorem
      </button>
    </form>
  );
}
