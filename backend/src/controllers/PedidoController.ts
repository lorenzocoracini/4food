import { Request, Response } from "express";
import { pedidoRepository } from "../repositories/pedidoRepository";
import { productRepository } from "../repositories/productRepository";
import { comboRepository } from "../repositories/comboRepository";
import { userRepository } from "../repositories/userRepository";
export class PedidoController {
  async create(req: Request, res: Response) {
    const { client_id } = req.params;
    if (!client_id) {
      return res.status(400).json({ message: "Client Id is required" });
    }
    try {
      const user = await userRepository.findOneBy({
        id: Number(client_id),
      });
      if (!user) {
        return res.status(404).json({ message: "Client does not exist" });
      }
      const newPedido = pedidoRepository.create();
      newPedido.client = user;
      await pedidoRepository.save(newPedido);

      const { password, ...userWithoutPassword } = user;
      return res.status(201).json({ ...newPedido, client: userWithoutPassword });
    } catch (erro) {
      console.log(erro);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async addProduct(req: Request, res: Response) {
    const { pedido_id, product_id } = req.params;

    try {
      const pedido = await pedidoRepository
        .createQueryBuilder("pedido")
        .leftJoinAndSelect("pedido.produtos", "produtos")
        .where("pedido.id = :id", { id: pedido_id })
        .getOne();
      if (!pedido) {
        return res.status(404).json({ message: "Pedido does not exist" });
      }

      const product = await productRepository.findOneBy({
        id: Number(product_id),
      });
      if (!product) {
        return res.status(404).json({ message: "Product does not exist" });
      }

      pedido.produtos.push(product);
      await pedidoRepository.save(pedido);
      return res.status(201).json(pedido.produtos);
    } catch (erro) {
      console.log(erro);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async addCombo(req: Request, res: Response) {
    const { pedido_id, combo_id } = req.params;

    try {
      const pedido = await pedidoRepository
        .createQueryBuilder("pedido")
        .leftJoinAndSelect("pedido.combos", "combos")
        .where("pedido.id = :id", { id: pedido_id })
        .getOne();
      if (!pedido) {
        return res.status(404).json({ message: "Pedido does not exist" });
      }

      const combo = await comboRepository.findOneBy({
        id: Number(combo_id),
      });
      if (!combo) {
        return res.status(404).json({ message: "Combo does not exist" });
      }

      pedido.combos.push(combo);
      await pedidoRepository.save(pedido);
      return res.status(201).json(pedido.combos);
    } catch (erro) {
      console.log(erro);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
