import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Aposta } from './ApostaEntity';
import { Campeonato } from './CampeonatoEntity';
import { Endereco } from './EnderecoEntity';

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

  @OneToOne(() => Endereco, (endereco) => endereco.usuario, {
    nullable: true,
    cascade: true,
  })
  endereco: Endereco;

  @OneToMany(() => Aposta, (aposta) => aposta.usuario, { cascade: true })
  apostas: Aposta[];

  @ManyToMany(() => Campeonato, (campeonato) => campeonato.usuarios)
  @JoinTable()
  campeonatos: Campeonato[];
}
