import Image from "next/image";

import { motion } from "framer-motion";

import HomemSushi from "@images/homem-fazendo-sushi.jpg";
import BandejaSushi from "@images/bandeja-sushi.jpg";
import PratoComSushi from "@images/prato-com-sushi.jpg";

export function PhilosophySection() {
  return (
    <section className="w-full mt-40 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="">
          <div className="flex w-full gap-4">
            <div>
              <Image src={HomemSushi} width={470} alt="mapa" />
            </div>
            <div className="flex flex-col gap-6 pt-24">
              <Image src={PratoComSushi} width={300} alt="mapa" />
              <Image
                src={BandejaSushi}
                width={300}
                alt="mapa"
                className="h-27"
              />
            </div>
            <div className="w-96 py-28 mx-20 flex flex-col justify-start">
              <p className="text-2xl text-black mb-6">
                私達はあなたを待っている！
              </p>
              <h2 className="font-bold text-3xl mb-6">NOSSOS VALORES</h2>
              <p className="text-lg text-gray-500 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus rem ipsa magni, reiciendis modi sunt sequi rerum
                qui fugiat inventore.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
