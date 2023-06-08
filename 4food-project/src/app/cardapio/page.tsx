import { ItemMenu } from "../components/ItemMenu";
import exemplo from "@images/sushiexemplo.jpg"

export default function Cardapio() {
  return (
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
  );
}
