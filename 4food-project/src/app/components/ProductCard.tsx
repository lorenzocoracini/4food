import Image from "next/image";
import ProductImage from "@images/sushiexemplo.jpg";

type Props = {
  produto: any;
  isCombo?: boolean;
};

export function ProductCard({ produto }: Props) {
  return (
    <div className="bg-opacity-30 flex flex-col justify-center items-center py-2">
      <div className="flex flex-col justify-center items-center lg:flex-row px-2">
        <div className="w-full flex justify-center lg:w-2/6">
          <Image src={ProductImage} width={256} alt="Imagem do produto" />
        </div>
        <div className="w-64 lg:w-full flex flex-col lg:flex-row justify-start lg:justify-between mt-1 pl-1 lg:mt-0">
          <h1 className="font-bold lg:text-sm text-md">{produto.nome}</h1>
          <p className="text-sm py-1">Quantidade: {produto.quantidade}</p>
          <div className="w-full pl-1">
            <p className="text-sm text-end font-bold lg:w-16">
              {produto.preco}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
