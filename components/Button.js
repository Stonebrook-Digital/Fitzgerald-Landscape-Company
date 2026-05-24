import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type,
  onClick,
  ...rest
}) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type || "button"} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
