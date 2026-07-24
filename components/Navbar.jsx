"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="logo">ATIF</h3>

      <div className="nav-links">
        <Link href="#stack">stack</Link>
        <Link href="#work">work</Link>
        <Link href="#about">about</Link>
        <Link href="#connect">connect</Link>
      </div>
    </nav>
  )
}
