import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Produto } from "./Produto";

@Entity("combos")
export class Combo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @ManyToMany(() => Produto)
  @JoinTable({ name: "produtos_do_combo" })
  produtos: Produto[];
}
