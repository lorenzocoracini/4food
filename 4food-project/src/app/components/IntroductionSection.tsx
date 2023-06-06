"use client";

import { useRef } from "react";
import { Button } from "./Button";
import { motion, useInView } from "framer-motion";

export function IntroductionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="text-center w-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        <h1 className="p-4 mt-20 font-bold text-6xl tracking-wide ">
          O MELHOR SUSHI DA CIDADE
        </h1>
        <p className="text-gray-500 text-xl px-36 xl:px-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          rem ipsa magni, reiciendis modi sunt sequi rerum qui fugiat inventore.
        </p>
        <div className="m-20">
          <Button>FAZER PEDIDO</Button>
        </div>
      </motion.div>
    </section>
  );
}
