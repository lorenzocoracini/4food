"use client";
import React, { useEffect } from "react";
import { ComeAndVisitUs } from "./components/ComeAndVisitUs";
import { IntroductionSection } from "./components/IntroductionSection";
import { PhotoSection } from "./components/PhotosSection";
import { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

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
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={"visible"}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        <ComeAndVisitUs />
      </motion.div>
    </div>
  );
}

export default Home;
