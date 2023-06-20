"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";

import { motion, useInView } from "framer-motion";

export default function IntroductionSection() {
  const ref = useRef(null);
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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
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

          <div className="mt-16">
            <p className="font-bold text-lg">Produtos selecionados</p>
            <div className="bg-slate-300 p-4 rounded-tr-md rounded-bl-md">
              <div className="flex flex-col gap-2"></div>

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
