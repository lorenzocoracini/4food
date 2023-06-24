import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from "typeorm";

import { Combo } from "./Combo";
import { Produto } from "./Produto";
import { User } from "./User";

@Entity("pedidos")
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinTable({ name: "client_do_pedido" })
  client: User;

  @Column({ type: "text", nullable: true })
  rua: string;

  @Column({ type: "text", nullable: true })
  bairro: string;

  @Column({ type: "text", nullable: true })
  numero: string;

  @Column({ type: "text", nullable: true })
  complemento: string;

  @ManyToMany(() => Produto)
  @JoinTable({ name: "produtos_do_pedido" })
  produtos: Produto[];

  @ManyToMany(() => Combo)
  @JoinTable({ name: "combos_do_pedido" })
  combos: Combo[];
}
