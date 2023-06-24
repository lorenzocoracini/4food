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

routes.delete("/user/:user_id", new UserController().delete);
routes.put("/user/:user_id", new UserController().update);
routes.post("/product", new ProdutoController().create);

routes.post("/combo", new ComboController().create);
routes.post(
  "/combo/:combo_id/add_product/:product_id",
  new ComboController().addProduct
);

routes.post(
  "/combo/:combo_id/remove_product/:product_id",
  new ComboController().removeProduct
);

routes.post("/pedido/:client_id", new PedidoController().create);

routes.use(authMiddleware)
routes.get("/profile", new LoginController().getProfile);
export default routes;
