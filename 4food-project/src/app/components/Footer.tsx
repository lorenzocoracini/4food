import Image from "next/image";
import logo from "@images/logo-4food.png";

export function Footer() {
  return (
    <footer className="bg-black h-20 text-white">
      <div>
        <Image
          src={logo}
          alt="Logo 4Food"
          className="w-48 hover:scale-95 hover:opacity-60 duration-300"
        />
      </div>
    </footer>
  );
}
