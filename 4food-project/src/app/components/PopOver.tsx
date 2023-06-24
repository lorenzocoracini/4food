import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { ProductCard } from "./ProductCard";

const PopOver = () => {
  const [pedido, setPedido] = useState({
    produtos: [
      {
        nome: "sushi",
        quantidade: 4,
        preco: `R$ ${12.0}`,
        id: "1",
      },
      {
        nome: "sushi",
        quantidade: 4,
        preco: `R$ ${12.0}`,
        id: "1",
      },
      {
        nome: "sushi",
        quantidade: 4,
        preco: `R$ ${12.0}`,
        id: "1",
      },
    ],
    combos: [
      {
        nome: "Combo Promoção de Inverno Sushi + Temaki",
        id: "2",
        preco: `R$ ${69.99}`,
        quantidade: 2,
      },
    ],
  });
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="IconButton" aria-label="Update dimensions">
          <AiOutlineShoppingCart size={32} />
        </button>
      </Popover.Trigger>
      <Popover.Portal className="mt-10">
        <Popover.Content
          className="PopoverContent z-50 bg-white border border-black border-solid p-4 rounded"
          sideOffset={5}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
            className="text-black max-w-xs pt-6"
          >
            <p className="text-start font-bold text-sm pl-8">Produtos</p>
            {pedido.produtos.map((produto) => {
              return <ProductCard key={produto.id} produto={produto} />;
            })}

            <Link href="/finalizar_pedido" className="block px-3 py-4">
              <div className="flex justify-center">
                <button className="text-md bg-black text-white px-6 py-2 hover:opacity-60 hover:scale-95 duration-300">
                  Finalizar Pedido
                </button>
              </div>
            </Link>
          </div>
          <Popover.Close
            className="absolute top-6 right-4 h-8 w-8 border border-solid border-black items-center justify-center rounded-2xl bg-white inline-flex"
            aria-label="Close"
          >
            <RxCross2 />
          </Popover.Close>
          <Popover.Arrow className="fill-black mb-4" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default PopOver;
