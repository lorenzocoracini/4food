"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useForm } from "react-hook-form";

import { ProductCard } from "../components/ProductCard";

export default function IntroductionSection() {
  const [pedido, setPedido] = useState({
    produtos: [
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    console.log("Vamos pedir um sushizin?");
  }

  return (
    <main className="w-full px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col lg:flex-row lg:justify-center"
        >
          <div>
            <p className="font-bold text-lg">Complete seu pedido</p>
            <div className="bg-slate-300 p-4 rounded-tr-md rounded-bl-md">
              <h3 className="text-lg">Endereço de entrega</h3>
              <p className="text-sm py-2">
                Informe o endereço onde deseja receber seu pedido
              </p>
              <div className="flex flex-col gap-2">
                <input
                  className="rounded p-2 w-full"
                  type="text"
                  name="cep"
                  id="cep"
                  placeholder="CEP"
                />
                <input
                  className="rounded p-2  w-full"
                  type="text"
                  name="rua"
                  id="rua"
                  placeholder="Rua"
                />
                <input
                  className="rounded p-2  w-full"
                  type="text"
                  name="numero"
                  id="numero"
                  placeholder="Número"
                />
                <input
                  className="rounded p-2 w-full"
                  type="text"
                  name="complemento"
                  id="complemento"
                  placeholder="Complemento"
                />
                <input
                  className="rounded p-2 w-full"
                  type="text"
                  name="bairro"
                  id="bairro"
                  placeholder="Bairro"
                />
                <input
                  className="rounded p-2 w-full"
                  type="text"
                  name="cidade"
                  id="cidade"
                  placeholder="Cidade"
                />
              </div>
            </div>

            <div className="mt-6">
              <div className="bg-slate-300 p-4 rounded-tr-md rounded-bl-md">
                <h3 className="text-lg">$ Pagamento</h3>
                <p className="text-sm py-2">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar.
                </p>
                <div className="flex flex-col gap-2">
                  <RadioGroup.Root
                    className="flex flex-col gap-4"
                    defaultValue="default"
                    aria-label="View density"
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <RadioGroup.Item
                        className="bg-white w-6 h-6 rounded-full shadow-md"
                        value="default"
                        id="r1"
                      >
                        <RadioGroup.Indicator className="flex items-center justify-center relative  after:block after:w-3 after:h-3 after:rounded-3xl after:bg-violet-800" />
                      </RadioGroup.Item>
                      <label className="text-sm pl-4" htmlFor="r1">
                        CARTÃO DE CRÉDITO
                      </label>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <RadioGroup.Item
                        className="bg-white w-6 h-6 rounded-full shadow-md"
                        value="comfortable"
                        id="r2"
                      >
                        <RadioGroup.Indicator className="flex items-center justify-center relative  after:block after:w-3 after:h-3 after:rounded-3xl after:bg-violet-800" />
                      </RadioGroup.Item>
                      <label className="text-sm pl-4" htmlFor="r2">
                        CARTÃO DE DÉBITO
                      </label>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <RadioGroup.Item
                        className="bg-white w-6 h-6 rounded-full shadow-md"
                        value="compact"
                        id="r3"
                      >
                        <RadioGroup.Indicator className="flex items-center justify-center relative  after:block after:w-3 after:h-3 after:rounded-3xl after:bg-violet-800" />
                      </RadioGroup.Item>
                      <label className="text-sm pl-4" htmlFor="r3">
                        DINHEIRO
                      </label>
                    </div>
                  </RadioGroup.Root>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center lg:mt-0 lg:ml-6 lg:w-1/3">
            <p className="font-bold text-lg">Produtos selecionados</p>
            <div className="bg-slate-300 p-4 rounded-tr-md rounded-bl-md lg:w-full">
              <div className="flex flex-col gap-2 mb-4">
                {pedido.produtos.map((produto) => {
                  return <ProductCard key={produto.id} produto={produto} />;
                })}
                {pedido.combos.map((combo) => {
                  return (
                    <ProductCard
                      key={combo.id}
                      produto={combo}
                      isCombo={true}
                    />
                  );
                })}
              </div>

              <h3 className="text-sm">Total dos itens - R$ 65,80</h3>
              <p className="text-sm py-2">Entrega - R$ 10,99</p>
              <p className="font-bold text-lg">Total - 76,79</p>
              <button
                className="px-32 text-white bg-green-600 py-2 rounded hover:scale-95 
        hover:opacity-80 duration-300"
              >
                Confirmar pedido
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </main>
  );
}
