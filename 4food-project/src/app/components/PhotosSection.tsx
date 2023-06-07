import Image from "next/image";

import imagem1 from "@images/salmaozinho.jpeg";
import imagem2 from "@images/sushi-com-graozinho.jpeg";
import imagem3 from "@images/lamen.jpeg";

export function PhotoSection() {
  return (
    <section className="relative">
      <div className="z-index-50 absolute flex items-center justify-center gap-16">
        <Image src={imagem1} width={450} alt="salmao" />
        <Image
          src={imagem2}
          width={450}
          alt="sushi-com-graozinho"
          className="mt-36"
        />
        <Image src={imagem3} width={450} alt="lamen" />
      </div>
      <div className="h-72"></div>
      <div className="h-33 bg-black"></div>
    </section>
  );
}
