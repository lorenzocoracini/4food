import Image from "next/image";
import {motion} from 'framer-motion'

import imagem1 from "@images/salmaozinho.jpeg";
import imagem2 from "@images/sushi-com-graozinho.jpeg";
import imagem3 from "@images/lamen.jpeg";

export function PhotoSection() {
  return (
    <section className="relative">
      <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >

      <div className="z-index-50 absolute flex items-center justify-center lg:gap-16 xl:gap-40">
        <Image src={imagem1} width={460} alt="salmao" />
        <Image
          src={imagem2}
          width={460}
          alt="sushi-com-graozinho"
          className="mt-36"
        />
        <Image src={imagem3} width={455} alt="lamen" />
      </div>
      <div className="h-72"></div>
      <div className="h-33 bg-black"></div>
            </motion.div>
    </section>
  );
}
