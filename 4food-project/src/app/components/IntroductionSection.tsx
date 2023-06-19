"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "./Button";

export function IntroductionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  function goOrder() {
    console.log("Vamos pedir um sushizin?");
  }

  return (
    <section className="text-center w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="p-4 mt-20 font-bold text-6xl tracking-wide ">
          O MELHOR SUSHI DA CIDADE
        </h1>
        <p className="text-gray-500 text-xl px-36 xl:px-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          rem ipsa magni, reiciendis modi sunt sequi rerum qui fugiat inventore.
        </p>
        <div className="mx-20 my-6">
          <Button onClick={goOrder}>FAZER PEDIDO</Button>
        </div>
      </motion.div>
    </section>
  );
}
