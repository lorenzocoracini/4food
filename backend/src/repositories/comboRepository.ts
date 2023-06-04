import { AppDataSource } from "../data-source";
import { Combo } from "../entities/Combo";

export const comboRepository = AppDataSource.getRepository(Combo)
