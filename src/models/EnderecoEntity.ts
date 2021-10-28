import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 50 })
  cep: string;

  @Column({ nullable: false, length: 50 })
  logradouro: string;

  @Column({ nullable: false, length: 50 })
  complemento: string;

  @Column({ nullable: false, length: 50 })
  numero: string;

  @Column({ nullable: false, length: 50 })
  bairro: string;

  @Column({ nullable: false, length: 50 })
  estado: string;
}
