import { Router } from "express";
import { ProdutoController } from "./controllers/ProdutoController";
import { ComboController } from "./controllers/ComboController";
import { PedidoController } from "./controllers/PedidoController";
import { UserController } from "./controllers/UserController";
const routes = Router();

routes.post("/produto", new ProdutoController().create);
routes.post("/combo", new ComboController().create);
routes.post(
  "/combo/:combo_id/add_product/:product_id",
  new ComboController().addProduct
);
routes.post("/pedido", new PedidoController().create);
routes.post("/user", new UserController().create);

export default routes;
