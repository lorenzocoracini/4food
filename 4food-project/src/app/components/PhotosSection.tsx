import Image from "next/image";
import { motion } from "framer-motion";

import imagem1 from "@images/salmaozinho.jpeg";
import imagem2 from "@images/sushi-com-graozinho.jpeg";
import imagem3 from "@images/lamen.jpeg";

export function PhotoSection() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="lg:relative">
          <div className="flex flex-col items-center justify-center px-4 gap-4 lg:z-index-50 absolute  lg:gap-16 xl:gap-40">
            <Image src={imagem1} width={460} alt="salmao" />
            <Image
              src={imagem2}
              width={460}
              alt="sushi-com-graozinho"
              className="lg:mt-36"
            />
            <Image src={imagem3} width={455} alt="lamen" />
          </div>
          <div className="h-72"></div>
          <div className="h-33 bg-black"></div>
        </div>
      </motion.div>
    </section>
  );
}
