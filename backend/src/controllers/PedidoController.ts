import { Request, Response } from "express";
import { pedidoRepository } from "../repositories/pedidoRepository";
import { productRepository } from "../repositories/productRepository";
import { comboRepository } from "../repositories/comboRepository";
export class PedidoController {
  async create(req: Request, res: Response) {
    const { client_name } = req.body;
    if (!client_name) {
      return res.status(400).json({ message: "Client Name is required" });
    }
    try {
      const newPedido = pedidoRepository.create({
        client_name,
      });
      await pedidoRepository.save(newPedido);
      return res.status(201).json(newPedido);
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
