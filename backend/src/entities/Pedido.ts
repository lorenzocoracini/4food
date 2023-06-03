import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { Combo } from "./Combo";
import { Produto } from "./Produto";

@Entity("pedidos")
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Produto)
  @JoinTable({ name: "produtos_do_pedido" })
  produtos: Produto[];

  @ManyToMany(() => Combo)
  @JoinTable({ name: "combos_do_pedido" })
  combos: Combo[];
}
