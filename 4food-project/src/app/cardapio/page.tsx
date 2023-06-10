"use client"
import { ItemMenu } from "../components/ItemMenu";
import exemplo from "@images/sushiexemplo.jpg";
import CSS from "csstype";
import { color } from "framer-motion";
import { useState } from "react";

export default function Cardapio() {

  const [activeItem, setActiveItem] = useState('principal')

  const handleClick = (item: string) => {
    setActiveItem(item)
  }

  const styleButtonActive = 'text-black bg-white border border-black'
  
  const styleButtonNotActive = 'text-white bg-black'

  return (
    <section>
      <div className="text-center py-3 mb-3">
        <p className="text-gray-900 text-xl mb-3">メニュー</p>
        <h1 className="text-4xl font-bold">NOSSO MENU</h1>
      </div>
      <div className="flex justify-center flex-wrap gap-2 my-3">
        <button className={`px-14 py-4 hover:opacity-80 hover:-translate-y-1 
        duration-300 text-xl ${activeItem === 'principal' ? styleButtonActive : styleButtonNotActive}`} 
        onClick={() => handleClick("principal")}>PRINCIPAIS</button>
        <button className={`px-14 py-4 hover:opacity-80 hover:-translate-y-1 
        duration-300 text-xl ${activeItem === 'sushi' ? styleButtonActive : styleButtonNotActive}`} 
        onClick={() => handleClick("sushi")}>SUSHI</button>
        <button className={`px-14 py-4 hover:opacity-80 hover:-translate-y-1 
        duration-300 text-xl ${activeItem === 'bebidas' ? styleButtonActive : styleButtonNotActive}`} 
        onClick={() => handleClick("bebidas")}>BEBIDAS</button>
        <button className={`px-14 py-4 hover:opacity-80 hover:-translate-y-1 
        duration-300 text-xl ${activeItem === 'combos' ? styleButtonActive : styleButtonNotActive}`} 
        onClick={() => handleClick("combos")}>COMBOS</button>
        
      </div>
      <div className="w-full py-8 px-32 md:grid md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 items-center 
      justify-center lg:flex lg:flex-wrap">
        <ItemMenu price={19.99} name="Sushi" image={exemplo} description="Sushizinho muito saboroso"/>
        <ItemMenu price={19.99} name="Sushi" image={exemplo} description="Sushizinho muito saboroso"/>
        <ItemMenu price={19.99} name="Sushi" image={exemplo} description="Sushizinho muito saboroso"/>
        <ItemMenu price={19.99} name="Sushi" image={exemplo} description="Sushizinho muito saboroso"/>
        <ItemMenu price={19.99} name="Sushi" image={exemplo} description="Sushizinho muito saboroso"/>
        <ItemMenu price={19.99} name="Sushi" image={exemplo} description="Sushizinho muito saboroso"/>
        <ItemMenu price={19.99} name="Sushi" image={exemplo} description="Sushizinho muito saboroso"/>
        <ItemMenu price={19.99} name="Sushi" image={exemplo} description="Sushizinho muito saboroso"/>
        <ItemMenu price={19.99} name="Sushi" image={exemplo} description="Sushizinho muito saboroso"/>
        <ItemMenu price={19.99} name="Sushi" image={exemplo} description="Sushizinho muito saboroso"/>
      </div>
    </section>
  );
}
