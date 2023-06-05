import { Router } from "express";
import { ProdutoController } from "./controllers/ProdutoController";
import { ComboController } from "./controllers/ComboController";
import { PedidoController } from "./controllers/PedidoController";
import { UserController } from "./controllers/UserController";
import { authMiddleware } from "./middlewares/authMiddleware";
import { LoginController } from "./controllers/LoginController";
const routes = Router();

routes.post("/user", new UserController().create);
routes.post("/login", new LoginController().login);
routes.get("/profile", authMiddleware, new LoginController().getProfile);

routes.post("/product", new ProdutoController().create);

routes.post("/combo", new ComboController().create);
routes.post(
  "/combo/:combo_id/add_product/:product_id",
  new ComboController().addProduct
);

routes.post("/pedido/:client_id", new PedidoController().create);
routes.post(
  "/pedido/:pedido_id/add_product/:product_id",
  new PedidoController().addProduct
);
routes.post(
  "/pedido/:pedido_id/remove_product/:product_id",
  new PedidoController().removeProduct
);
routes.post(
  "/pedido/:pedido_id/add_combo/:combo_id",
  new PedidoController().addCombo
);

export default routes;
