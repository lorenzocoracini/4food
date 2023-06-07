"use client";
import "./globals.css";


import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

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
  }, [isInView]);

  return (
    <div className="w-full">
      <IntroductionSection />
      <PhotoSection />
      <PhilosophySection/>
      <ComeAndVisitUs />
      
    </div>
  );
}


export default Home;
