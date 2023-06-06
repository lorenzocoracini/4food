import { Request, Response } from "express";
import { comboRepository } from "../repositories/comboRepository";
import { productRepository } from "../repositories/productRepository";

export class ComboController {
  async create(req: Request, res: Response) {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    try {
      const newCombo = comboRepository.create({
        name,
      });
      await comboRepository.save(newCombo);
      return res.status(201).json(newCombo);
    } catch (erro) {
      console.log(erro);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async addProduct(req: Request, res: Response) {
    const { combo_id, product_id } = req.params;

    try {
      const combo = await comboRepository
        .createQueryBuilder("combo")
        .leftJoinAndSelect("combo.produtos", "produtos")
        .where("combo.id = :id", { id: combo_id })
        .getOne();
      if (!combo) {
        return res.status(404).json({ message: "Combo does not exist" });
      }

      const product = await productRepository.findOneBy({
        id: Number(product_id),
      });
      if (!product) {
        return res.status(404).json({ message: "Product does not exist" });
      }

      combo.produtos.push(product);
      await comboRepository.save(combo);
      return res.status(201).json(combo.produtos);
    } catch (erro) {
      console.log(erro);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async removeProduct(req: Request, res: Response) {
    const { combo_id, product_id } = req.params;

    try {
      const combo = await comboRepository
        .createQueryBuilder("combo")
        .leftJoinAndSelect("combo.produtos", "produtos")
        .where("combo.id = :id", { id: combo_id })
        .getOne();
      if (!combo) {
        return res.status(404).json({ message: "Combo does not exist" });
      }

      const productIndex = combo.produtos.findIndex(
        (product) => product.id === Number(product_id)
      );
      if (productIndex === -1) {
        return res
          .status(404)
          .json({ message: "Product does not exist in the combo" });
      }

      combo.produtos.splice(productIndex, 1);
      await comboRepository.save(combo);
      return res.status(200).json(combo.produtos);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
