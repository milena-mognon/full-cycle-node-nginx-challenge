import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("people") // Diz que essa entidade represetnta a tabela users no banco
export default class User {
  @PrimaryGeneratedColumn("increment") // id é gerado pelo banco de forma incremental
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
