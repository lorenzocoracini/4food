import { Request, Response } from "express";
import { productRepository } from "../repositories/productRepository";

export class ProdutoController {
  async create(req: Request, res: Response) {
    const { name, price } = req.body;
    if (!name) {
      return res.status(400).json({ message: "O nome é obrigatório" });
    }
    if (!price) {
      return res.status(400).json({ message: "O Preço é obrigatório" });
    }
    try {
      const newProduct = productRepository.create({
        name,
        price,
      });
      await productRepository.save(newProduct);
      return res.status(201).json(newProduct);
    } catch (erro) {
      console.log(erro);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
