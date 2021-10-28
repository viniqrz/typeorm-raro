import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Aposta } from './ApostaEntity';
import { Campeonato } from './CampeonatoEntity';
import { Partida } from './PartidaEntity';

@Entity()
export class Rodada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 50 })
  nome: string;

  @Column({ nullable: false, length: 50 })
  slug: string;

  @Column({ nullable: false })
  rodada: number;

  @Column({ nullable: false, length: 50 })
  status: string;

  @ManyToOne(() => Campeonato, (campeonato) => campeonato.rodadas)
  campeonato: Campeonato;

  @OneToMany(() => Partida, (partida) => partida.rodada, { cascade: true })
  partidas: Partida[];
}
