import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from "typeorm";
import { Pedido } from "./Pedido";
@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text", unique: true })
  email: string;

  @Column({ type: "text" })
  password: string;

  @OneToMany(() => Pedido, (pedido) => pedido.client)
  @JoinTable({ name: "pedidos_do_cliente" })
  pedidos: Pedido[];
}
