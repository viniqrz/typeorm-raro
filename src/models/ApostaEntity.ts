import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Partida } from './PartidaEntity';
import { Usuario } from './UsuarioEntity';

@Entity()
export class Aposta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  placarMandante: number;

  @Column({ nullable: false })
  placarVisitante: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.apostas, { cascade: true })
  usuario: Usuario;

  @ManyToOne(() => Partida, (partida) => partida.apostas, { cascade: true })
  partida: Partida;
}
