import Link from "next/link";
import { ReactNode } from "react";

import styles from "./styles.module.css";

interface IAsideLinkProps {
  href: string;
  children: ReactNode;
}

export const AsideLink = ({ href, children }: IAsideLinkProps) => {
  return (
    <Link href={href} className={styles.asidelink}>
      {children}
    </Link>
  );
};
