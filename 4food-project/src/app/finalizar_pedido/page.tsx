"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { motion, useInView } from "framer-motion";
import { ProductCard } from "../components/ProductCard";

export default function IntroductionSection() {
  const ref = useRef(null);

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
  const isInView = useInView(ref, { once: true });

  function onSubmit() {
    console.log("Vamos pedir um sushizin?");
  }

  return (
    <main className="w-full px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col lg:flex-row"
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
                  <label htmlFor="cartao_de_credito">
                    CARTÃO DE CRÉDITO
                    <input
                      type="radio"
                      name="cartao_de_credito"
                      id="cartao_de_credito"
                    />
                  </label>

                  <label htmlFor="cartao_de_debito">
                    CARTÃO DE DÉBITO
                    <input
                      type="radio"
                      name="cartao_de_debito"
                      id="cartao_de_debito"
                    />
                  </label>
                  <label htmlFor="dinheiro">
                    DINHEIRO
                    <input type="radio" name="dinheiro" id="dinheiro" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 lg:ml-6">
            <p className="font-bold text-lg">Produtos selecionados</p>
            <div className="bg-slate-300 p-4 rounded-tr-md rounded-bl-md lg:w-1/2">
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
            </div>
          </div>
        </form>
      </motion.div>
    </main>
  );
}
