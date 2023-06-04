import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("produtos")
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "integer", default: 1 })
  quantity: number;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "decimal" })
  price: number;
}
