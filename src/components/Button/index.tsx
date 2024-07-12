import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./styles.module.css";

type ButtonProps = {
  children: ReactNode;
  outline?: boolean;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, href, outline, ...props }: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} className={outline ? styles.outline : styles.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button className={outline ? styles.outline : styles.btn} {...props}>
      {children}
    </button>
  );
};
