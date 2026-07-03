"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, services, siteName, cta, getServiceHref } from "@/lib/content";
import Button from "./Button";
import styles from "./SiteHeader.module.css";

const SCROLL_SCROLLED = 32;
const SCROLL_COMPACT = 100;
const SCROLL_HIDE_PROMO = 140;

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [compact, setCompact] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const dropdownRef = useRef(null);

  const isServicesActive = pathname === "/services" || pathname.startsWith("/services/");

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (menuOpen) {
      setMenuOpen(false);
    }
    setMobileServicesOpen(false);
    setServicesOpen(false);
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

  useEffect(() => {
    if (!servicesOpen) return;

    const onPointerDown = (event) => {
      if (dropdownRef.current?.contains(event.target)) return;
      setServicesOpen(false);
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

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
              {navLinks.slice(0, 1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={pathname === link.href ? styles.active : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li
                className={styles.dropdown}
                ref={dropdownRef}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className={`${styles.dropdownToggle} ${isServicesActive ? styles.active : ""}`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((open) => !open)}
                >
                  Services
                  <span className={styles.chevron} aria-hidden="true" />
                </button>
                <ul
                  className={`${styles.dropdownMenu} ${servicesOpen ? styles.dropdownMenuOpen : ""}`}
                  role="menu"
                >
                  <li role="none">
                    <Link
                      href="/services"
                      role="menuitem"
                      className={pathname === "/services" ? styles.active : undefined}
                      onClick={() => setServicesOpen(false)}
                    >
                      All Services
                    </Link>
                  </li>
                  {services.map((service) => (
                    <li key={service.id} role="none">
                      <Link
                        href={getServiceHref(service.id)}
                        role="menuitem"
                        className={
                          pathname === getServiceHref(service.id) ? styles.active : undefined
                        }
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={pathname === link.href ? styles.active : undefined}
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
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen || undefined}
      >
        <nav aria-label="Mobile navigation">
          <ul>
            <li>
              <Link
                href="/"
                className={pathname === "/" ? styles.active : undefined}
              >
                Home
              </Link>
            </li>
            <li className={styles.mobileDropdown}>
              <button
                type="button"
                className={`${styles.mobileDropdownToggle} ${isServicesActive ? styles.active : ""}`}
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((open) => !open)}
              >
                Services
                <span className={styles.chevron} aria-hidden="true" />
              </button>
              {mobileServicesOpen && (
                <ul className={styles.mobileSubmenu}>
                  <li>
                    <Link
                      href="/services"
                      className={pathname === "/services" ? styles.active : undefined}
                    >
                      All Services
                    </Link>
                  </li>
                  {services.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={getServiceHref(service.id)}
                        className={
                          pathname === getServiceHref(service.id) ? styles.active : undefined
                        }
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/contact"
                className={pathname === "/contact" ? styles.active : undefined}
              >
                Contact
              </Link>
            </li>
          </ul>
          <Button href={cta.primaryHref} variant="gold" size="lg" className={styles.mobileCta}>
            {cta.mobileLabel}
          </Button>
        </nav>
      </div>
    </header>
  );
}
