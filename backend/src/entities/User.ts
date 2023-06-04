import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  name: string;
}
