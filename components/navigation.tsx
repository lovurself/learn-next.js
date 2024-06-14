// usePathname은 client component에서 사용해야함 그래서 아래 코드가 필요!
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🎃" : ""}
        </li>
        <li>
          <Link href="/about-us">About us</Link> {path === "/about-us" ? "🎃" : ""}
        </li>
      </ul>
    </nav>
  )
}