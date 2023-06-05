import { Router } from "express";
import { ProdutoController } from "./controllers/ProdutoController";
import { ComboController } from "./controllers/ComboController";
import { PedidoController } from "./controllers/PedidoController";
import { UserController } from "./controllers/UserController";
import { authMiddleware } from "./middlewares/authMiddleware";
const routes = Router();

routes.post("/produto", new ProdutoController().create);

routes.post("/combo", new ComboController().create);
routes.post(
  "/combo/:combo_id/add_product/:product_id",
  new ComboController().addProduct
);

routes.post("/pedido", new PedidoController().create);
routes.post(
  "/pedido/:pedido_id/add_product/:product_id",
  new PedidoController().addProduct
);
routes.post(
  "/pedido/:pedido_id/add_combo/:combo_id",
  new PedidoController().addCombo
);

routes.post("/user", new UserController().create);
routes.post("/login", new UserController().login);
routes.get("/profile", authMiddleware, new UserController().getProfile);

export default routes;
