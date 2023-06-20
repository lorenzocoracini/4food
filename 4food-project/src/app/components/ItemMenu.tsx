import Image, { StaticImageData } from "next/image";
import { AiOutlineMinusSquare, AiOutlinePlusSquare, AiOutlineShoppingCart } from 'react-icons/ai'

interface ProductProps {
    image: StaticImageData;
    name: string;
    price: number;
    description: string
}

export function ItemMenu(props: ProductProps) {
    return (
        <div className="max-w-xs lg:hover:-translate-y-2 lg:duration-300">
            <div className="relative overflow-hidden">
                <p className="text-black absolute bottom-5 right-5 py-1 px-3 bg-white font-bold z-10">R$ {props.price}</p>
                <Image src={props.image} alt={props.name} className="lg:hover:scale-105 lg:duration-200"/>
            </div>
            <div className="divide-y-3">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold uppercase py-3">{props.name}</h1>
                    <div className="flex items-center">
                        <button className="hover:opacity-70"><AiOutlineMinusSquare size={24}/></button>
                        <span className="w-5 h-5 bg-black text-white text-center">1</span>
                        <button className="hover:opacity-70"><AiOutlinePlusSquare size={24}/></button>
                        <p><AiOutlineShoppingCart size={24}/></p>
                    </div>
                </div>
                <p className="py-3 text-gray-500">{props.description}</p>
            </div>
        </div>
    );
  }
  