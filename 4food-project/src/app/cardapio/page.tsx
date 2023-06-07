import { ItemMenu } from "../components/ItemMenu";
import exemplo from "@images/sushiexemplo.jpg"

export default function Cardapio() {
  return (
    <div className="w-full p-8 flex flex-wrap gap-4 justify-center">
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
