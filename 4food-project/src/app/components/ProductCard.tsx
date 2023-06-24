import Image from "next/image";
import ProductImage from "@images/sushiexemplo.jpg";

type Props = {
  produto: any;
  isCombo?: boolean;
};

export function ProductCard({ produto, isCombo }: Props) {
  return (
    <div className="bg-opacity-30 flex flex-col justify-center items-center py-4 lg:flex-row">
      <div className="w-full flex justify-center lg:w-2/6">
        <Image src={ProductImage} width={280} alt="Imagem do produto" />
      </div>
      <div className="w-full flex flex-col justify-start mt-2 px-4 lg:mt-0  lg:pr-20">
        <h1 className="font-bold text-sm">{produto.nome}</h1>
        <p className="text-sm">Quantidade: {produto.quantidade}</p>
      </div>
      <div>
        <p className="text-sm text-center font-bold lg:w-16">{produto.preco}</p>
      </div>
    </div>
  );
}
