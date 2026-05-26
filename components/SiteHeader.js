"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, siteName, cta } from "@/lib/content";
import Button from "./Button";
import styles from "./SiteHeader.module.css";

const SCROLL_SCROLLED = 32;
const SCROLL_COMPACT = 100;
const SCROLL_HIDE_PROMO = 140;

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [compact, setCompact] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (menuOpen) {
      setMenuOpen(false);
    }
  }

  useEffect(() => {
    const root = document.documentElement;

    const update = () => {
      const y = window.scrollY;
      const isAtTop = y < 16;
      const isScrolled = y > SCROLL_SCROLLED;
      const isCompact = y > SCROLL_COMPACT;
      const hidePromo = y > SCROLL_HIDE_PROMO;

      setAtTop(isAtTop);
      setScrolled(isScrolled);
      setCompact(isCompact);

      root.classList.toggle("header-at-top", isAtTop);
      root.classList.toggle("header-scrolled", isScrolled);
      root.classList.toggle("header-compact", isCompact);
      root.classList.toggle("promo-hidden", hidePromo);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      root.classList.remove(
        "header-at-top",
        "header-scrolled",
        "header-compact",
        "promo-hidden"
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`${styles.header} ${atTop ? styles.atTop : ""} ${scrolled ? styles.scrolled : ""} ${compact ? styles.compact : ""} ${menuOpen ? styles.menuOpen : ""}`}
    >
      <div className={styles.bar}>
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo} aria-label={siteName}>
            <Image
              src="/FFF_Fitzgerald_LO.png"
              alt={siteName}
              width={220}
              height={64}
              priority
              className={styles.logoImg}
            />
          </Link>

          <nav className={styles.nav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={
                      pathname === link.href ? styles.active : undefined
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Button href={cta.primaryHref} variant="primary" size="sm" className={styles.cta}>
              {cta.primaryLabel}
            </Button>
            <button
              type="button"
              className={styles.toggle}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={styles.mobileMenu}
        hidden={!menuOpen}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href ? styles.active : undefined
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href={cta.primaryHref} variant="gold" size="lg" className={styles.mobileCta}>
            {cta.primaryLabel}
          </Button>
        </nav>
      </div>
    </header>
  );
}
