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

  @Column({ type: "text" })
  client_name: string;

  @ManyToMany(() => Produto)
  @JoinTable({ name: "produtos_do_pedido" })
  produtos: Produto[];

  @ManyToMany(() => Combo)
  @JoinTable({ name: "combos_do_pedido" })
  combos: Combo[];
}
