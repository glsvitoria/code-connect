import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/logo.svg";

import { AsideLink } from "../AsideLink";
import { Button } from "../Button";
import { Account } from "../icons/account";
import { Feed } from "../icons/feed";
import { Info } from "../icons/info";
import { Login } from "../icons/login";
import styles from "./styles.module.css";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <Image src={Logo} alt="Logo da Code Connect" />
            </Link>
          </li>
          <li>
            <Button href="/publish" outline>
              Publicar
            </Button>
          </li>
          <li>
            <AsideLink href="/">
              <Feed />
              Feed
            </AsideLink>
          </li>
          <li>
            <AsideLink href="/profile">
              <Account />
              Perfil
            </AsideLink>
          </li>
          <li>
            <AsideLink href="/about">
              <Info />
              Sobre nós
            </AsideLink>
          </li>
          <li>
            <AsideLink href="/login?">
              <Login />
              Login
            </AsideLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
