import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Aposta } from './ApostaEntity';
import { Campeonato } from './CampeonatoEntity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  hashSenha: string;

  @OneToMany(() => Aposta, (aposta) => aposta.usuario, { cascade: true })
  apostas: Aposta[];

  @ManyToMany(() => Campeonato, (campeonato) => campeonato.usuarios, {
    cascade: true,
  })
  @JoinTable()
  campeonatos: Campeonato[];
}
