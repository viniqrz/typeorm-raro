import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Partida } from './PartidaEntity';

@Entity()
export class Time {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 50 })
  nome: string;

  @Column({ nullable: false, length: 50 })
  sigla: string;

  @Column({ nullable: false, length: 500 })
  escudo: string;

  @ManyToMany((type) => Partida, { cascade: true })
  partidas: Partida[];
}
