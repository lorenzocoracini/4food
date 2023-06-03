import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("produtos")
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;

  @Column({ type: "decimal" })
  price: number;
}
