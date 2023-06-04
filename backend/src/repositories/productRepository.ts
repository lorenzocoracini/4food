import { AppDataSource } from "../data-source";
import { Produto } from "../entities/Produto";

export const productRepository = AppDataSource.getRepository(Produto)
