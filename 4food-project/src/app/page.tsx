"use client";
import "./globals.css";

import React, { useEffect, useRef } from "react";
import { useInView, useAnimation } from "framer-motion";

import { PhotoSection } from "./components/PhotosSection";
import { ComeAndVisitUs } from "./components/ComeAndVisitUs";
import { IntroductionSection } from "./components/IntroductionSection";
import { PhilosophySection } from "./components/PhilosophySection";

export function Home() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <main className="px-4 xl:px-0">
      <IntroductionSection />
      <PhotoSection />
      <PhilosophySection />
      <ComeAndVisitUs />
    </main>
  );
}

export default Home;
