import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Rodada } from './RodadaEntity';
import { Time } from './TimeEntity';
import { Aposta } from './ApostaEntity';

@Entity()
export class Partida {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 50 })
  placar: string;

  @ManyToMany(() => Time, { cascade: true })
  @JoinColumn()
  mandante: Time;

  @ManyToMany(() => Time, { cascade: true })
  @JoinColumn()
  visitante: Time;

  @Column({ nullable: false })
  placarMandante: number;

  @Column({ nullable: false })
  placarVisitante: number;

  @Column({ nullable: false, length: 50 })
  status: string;

  @Column({ nullable: false, length: 50 })
  slug: string;

  @Column({ nullable: false })
  dataRealizacao: Date;

  @ManyToOne(() => Rodada, (rodada) => rodada.partidas, { cascade: true })
  rodada: Rodada;

  @OneToMany(() => Aposta, (aposta) => aposta.partida, { cascade: true })
  apostas: Aposta[];
}
