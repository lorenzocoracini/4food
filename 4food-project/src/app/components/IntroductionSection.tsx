"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export function IntroductionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  function goOrder() {
    console.log("Vamos pedir um sushizin?");
  }

  return (
    <section className="text-center w-full mb-40">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="py-4 mt-20 font-bold text-6xl tracking-wide ">
          O MELHOR SUSHI DA CIDADE
        </h1>
        <p className="text-gray-500 text-xl px-8 xl:px-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          rem ipsa magni, reiciendis modi sunt sequi rerum qui fugiat inventore.
        </p>
        <Link href="/cardapio" className="block px-3 py-4">
          <button
            className="px-24 my-2 bg-black
            text-white
            py-6
            mt-20
            hover:opacity-80
            hover:-translate-y-1
            duration-300
            text-xl"
          >
            Fazer Pedido
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
