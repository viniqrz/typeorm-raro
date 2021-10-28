import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
dotenv.config();

export const start = async () => {
  try {
    const connection = await createConnection({
      type: 'mariadb',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    });
    console.log('banco de dados conectado com sucesso.');

    process.exit(0);
  } catch (error: unknown) {
    console.log('erro inesperado');
    process.exit(1);
  }
};

start();
