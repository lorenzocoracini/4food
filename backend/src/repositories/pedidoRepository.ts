import { AppDataSource } from "../data-source";
import { Pedido } from "../entities/Pedido";

export const pedidoRepository = AppDataSource.getRepository(Pedido);
