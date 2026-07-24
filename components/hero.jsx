"use client";

import { useState } from "react";
import Link from "next/link";

export default function Hero () {
  return (
    <div className="hero">
        <div className="intro">
            <h1 className="heading">
                FULL-STACK DEVELOPER
            </h1>
            <h2  className="subheading">
                BUILDING HEIGH-PERFORMENCE WEB SOLUTIONS
            </h2>
        </div>
        <div className="cardOne">
            <h2>
                In the ever-evolving landscape of modern technology, algorithms have become the silent architects of our daily routines, filtering our news, curating our media, and anticipating our desires with eerie precision. As we navigate this digital epoch, the boundary between the physical and virtual worlds continues to blur, creating a hybrid existence that demands both adaptability and a critical eye. While the sheer volume of data we generate daily offers unprecedented opportunities for scientific discovery and societal connection, it also raises profound questions about privacy, digital fatigue, and the commodification of human attention. Ultimately, thriving in this hyper-connected era requires us to strike a delicate balance, leveraging the transformative power of innovation while fiercely protecting our fundamental right to unplug and reflect in the analog world.
            </h2>
        </div>
    </div>
  )
}
