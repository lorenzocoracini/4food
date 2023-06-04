import { Request, Response } from "express";
import { pedidoRepository } from "../repositories/pedidoRepository";

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
}
