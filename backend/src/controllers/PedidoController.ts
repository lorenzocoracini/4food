import { Request, Response } from "express";
import { pedidoRepository } from "../repositories/pedidoRepository";
import { productRepository } from "../repositories/productRepository";
import { comboRepository } from "../repositories/comboRepository";
import { userRepository } from "../repositories/userRepository";
import { Produto } from "../entities/Produto";
import { Combo } from "../entities/Combo";

export class PedidoController {
  async create(req: Request, res: Response) {
    const { client_id, rua, numero, complemento } = req.params;
    const { products, combos } = req.body;

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
      const newPedido = pedidoRepository.create({ rua, numero, complemento });
      newPedido.client = user;
      await pedidoRepository.save(newPedido);

      console.log(products);
      combos.forEach(async (combo: Combo) => {
        await PedidoController.addCombo(newPedido.id, combo.id);
      });
      products.forEach(async (product: Produto) => {
        await PedidoController.addProduct(
          newPedido.id,
          product.id,
          product.quantity
        );
      });

      const { password, ...userWithoutPassword } = user;
      return res
        .status(201)
        .json({ ...newPedido, client: userWithoutPassword });
    } catch (erro) {
      console.log(erro);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  static async addProduct(
    pedido_id: number,
    product_id: number,
    quantity: number
  ) {
    try {
      const pedido = await pedidoRepository
        .createQueryBuilder("pedido")
        .leftJoinAndSelect("pedido.produtos", "produtos")
        .where("pedido.id = :id", { id: pedido_id })
        .getOne();
      if (!pedido) {
        return { message: "Pedido does not exist" };
      }

      const product = await productRepository.findOneBy({
        id: product_id,
      });
      if (!product) {
        return { message: "Product does not exist" };
      }
      product.quantity = quantity;
      await productRepository.save(product);

      pedido.produtos.push(product);
      await pedidoRepository.save(pedido);
      return;
    } catch (erro) {
      console.log(erro);
      return { message: "Internal Server Error" };
    }
  }

  static async addCombo(pedido_id: number, combo_id: number) {
    try {
      const pedido = await pedidoRepository
        .createQueryBuilder("pedido")
        .leftJoinAndSelect("pedido.combos", "combos")
        .where("pedido.id = :id", { id: pedido_id })
        .getOne();
      if (!pedido) {
        return { message: "Pedido does not exist" };
      }

      const combo = await comboRepository.findOneBy({
        id: Number(combo_id),
      });
      if (!combo) {
        return { message: "Combo does not exist" };
      }

      pedido.combos.push(combo);
      await pedidoRepository.save(pedido);
      return;
    } catch (erro) {
      console.log(erro);
      return { message: "Internal Server Error" };
    }
  }
}
