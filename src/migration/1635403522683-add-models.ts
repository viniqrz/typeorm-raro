import { MigrationInterface, QueryRunner } from 'typeorm';

export class addModels1635403522683 implements MigrationInterface {
  name = 'addModels1635403522683';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`endereco\` (\`id\` int NOT NULL AUTO_INCREMENT, \`cep\` varchar(50) NOT NULL, \`logradouro\` varchar(50) NOT NULL, \`complemento\` varchar(50) NOT NULL, \`numero\` varchar(50) NOT NULL, \`bairro\` varchar(50) NOT NULL, \`estado\` varchar(50) NOT NULL, \`usuarioId\` int NULL, UNIQUE INDEX \`REL_82bec04bb9fadadad0a33cb0c4\` (\`usuarioId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`usuario\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`hashSenha\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_2863682842e688ca198eb25c12\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`campeonato\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(50) NOT NULL, \`slug\` varchar(50) NOT NULL, \`nomePopular\` varchar(50) NOT NULL, \`status\` varchar(50) NOT NULL, \`logo\` varchar(500) NOT NULL, \`idCampeonatoApiExterna\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`rodada\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(50) NOT NULL, \`slug\` varchar(50) NOT NULL, \`rodada\` int NOT NULL, \`status\` varchar(50) NOT NULL, \`campeonatoId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`time\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(50) NOT NULL, \`sigla\` varchar(50) NOT NULL, \`escudo\` varchar(500) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`partida\` (\`id\` int NOT NULL AUTO_INCREMENT, \`placar\` varchar(50) NOT NULL, \`placarMandante\` int NOT NULL, \`placarVisitante\` int NOT NULL, \`status\` varchar(50) NOT NULL, \`slug\` varchar(50) NOT NULL, \`dataRealizacao\` datetime NOT NULL, \`rodadaId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`aposta\` (\`id\` int NOT NULL AUTO_INCREMENT, \`placarMandante\` int NOT NULL, \`placarVisitante\` int NOT NULL, \`usuarioId\` int NULL, \`partidaId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`usuario_campeonatos_campeonato\` (\`usuarioId\` int NOT NULL, \`campeonatoId\` int NOT NULL, INDEX \`IDX_a5e45d21183c3920bdb7900443\` (\`usuarioId\`), INDEX \`IDX_24044e378dda0fe5757f720632\` (\`campeonatoId\`), PRIMARY KEY (\`usuarioId\`, \`campeonatoId\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `CREATE TABLE \`campeonato_usuarios_usuario\` (\`campeonatoId\` int NOT NULL, \`usuarioId\` int NOT NULL, INDEX \`IDX_5bf389a50c738bbac9daa5b3fa\` (\`campeonatoId\`), INDEX \`IDX_17f4a8fb97b4e5e57a7aa961b8\` (\`usuarioId\`), PRIMARY KEY (\`campeonatoId\`, \`usuarioId\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `ALTER TABLE \`endereco\` ADD CONSTRAINT \`FK_82bec04bb9fadadad0a33cb0c43\` FOREIGN KEY (\`usuarioId\`) REFERENCES \`usuario\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`rodada\` ADD CONSTRAINT \`FK_d2f8c30f140114e3bd1a3c57221\` FOREIGN KEY (\`campeonatoId\`) REFERENCES \`campeonato\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`partida\` ADD CONSTRAINT \`FK_ed33f0276339f0973c6559d247d\` FOREIGN KEY (\`rodadaId\`) REFERENCES \`rodada\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`aposta\` ADD CONSTRAINT \`FK_e9bff60fe377a9d0a6c05ec67c6\` FOREIGN KEY (\`usuarioId\`) REFERENCES \`usuario\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`aposta\` ADD CONSTRAINT \`FK_c792d1284c6b67efbb6060cfdbf\` FOREIGN KEY (\`partidaId\`) REFERENCES \`partida\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`usuario_campeonatos_campeonato\` ADD CONSTRAINT \`FK_a5e45d21183c3920bdb79004438\` FOREIGN KEY (\`usuarioId\`) REFERENCES \`usuario\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE \`usuario_campeonatos_campeonato\` ADD CONSTRAINT \`FK_24044e378dda0fe5757f7206320\` FOREIGN KEY (\`campeonatoId\`) REFERENCES \`campeonato\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`campeonato_usuarios_usuario\` ADD CONSTRAINT \`FK_5bf389a50c738bbac9daa5b3fa8\` FOREIGN KEY (\`campeonatoId\`) REFERENCES \`campeonato\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE \`campeonato_usuarios_usuario\` ADD CONSTRAINT \`FK_17f4a8fb97b4e5e57a7aa961b8d\` FOREIGN KEY (\`usuarioId\`) REFERENCES \`usuario\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`campeonato_usuarios_usuario\` DROP FOREIGN KEY \`FK_17f4a8fb97b4e5e57a7aa961b8d\``
    );
    await queryRunner.query(
      `ALTER TABLE \`campeonato_usuarios_usuario\` DROP FOREIGN KEY \`FK_5bf389a50c738bbac9daa5b3fa8\``
    );
    await queryRunner.query(
      `ALTER TABLE \`usuario_campeonatos_campeonato\` DROP FOREIGN KEY \`FK_24044e378dda0fe5757f7206320\``
    );
    await queryRunner.query(
      `ALTER TABLE \`usuario_campeonatos_campeonato\` DROP FOREIGN KEY \`FK_a5e45d21183c3920bdb79004438\``
    );
    await queryRunner.query(
      `ALTER TABLE \`aposta\` DROP FOREIGN KEY \`FK_c792d1284c6b67efbb6060cfdbf\``
    );
    await queryRunner.query(
      `ALTER TABLE \`aposta\` DROP FOREIGN KEY \`FK_e9bff60fe377a9d0a6c05ec67c6\``
    );
    await queryRunner.query(
      `ALTER TABLE \`partida\` DROP FOREIGN KEY \`FK_ed33f0276339f0973c6559d247d\``
    );
    await queryRunner.query(
      `ALTER TABLE \`rodada\` DROP FOREIGN KEY \`FK_d2f8c30f140114e3bd1a3c57221\``
    );
    await queryRunner.query(
      `ALTER TABLE \`endereco\` DROP FOREIGN KEY \`FK_82bec04bb9fadadad0a33cb0c43\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_17f4a8fb97b4e5e57a7aa961b8\` ON \`campeonato_usuarios_usuario\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_5bf389a50c738bbac9daa5b3fa\` ON \`campeonato_usuarios_usuario\``
    );
    await queryRunner.query(`DROP TABLE \`campeonato_usuarios_usuario\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_24044e378dda0fe5757f720632\` ON \`usuario_campeonatos_campeonato\``
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_a5e45d21183c3920bdb7900443\` ON \`usuario_campeonatos_campeonato\``
    );
    await queryRunner.query(`DROP TABLE \`usuario_campeonatos_campeonato\``);
    await queryRunner.query(`DROP TABLE \`aposta\``);
    await queryRunner.query(`DROP TABLE \`partida\``);
    await queryRunner.query(`DROP TABLE \`time\``);
    await queryRunner.query(`DROP TABLE \`rodada\``);
    await queryRunner.query(`DROP TABLE \`campeonato\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_2863682842e688ca198eb25c12\` ON \`usuario\``
    );
    await queryRunner.query(`DROP TABLE \`usuario\``);
    await queryRunner.query(
      `DROP INDEX \`REL_82bec04bb9fadadad0a33cb0c4\` ON \`endereco\``
    );
    await queryRunner.query(`DROP TABLE \`endereco\``);
  }
}
