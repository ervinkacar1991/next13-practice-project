import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./dojo-logo.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Dojo Helpdesc logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h2>Ervin Kacar</h2>

      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
