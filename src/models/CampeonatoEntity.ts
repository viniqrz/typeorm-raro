import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { Rodada } from './RodadaEntity';
import { Usuario } from './UsuarioEntity';

@Entity()
export class Campeonato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 50 })
  nome: string;

  @Column({ nullable: false, length: 50 })
  slug: string;

  @Column({ nullable: false, length: 50 })
  nomePopular: string;

  @Column({ nullable: false, length: 50 })
  status: string;

  @Column({ nullable: false, length: 500 })
  logo: string;

  @Column()
  idCampeonatoApiExterna: number;

  @ManyToMany((type) => Usuario)
  @JoinTable()
  usuarios: Usuario[];

  @OneToMany((type) => Rodada, (rodada) => rodada.campeonato, { cascade: true })
  rodadas: Rodada[];
}
