import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
dotenv.config();

export const start = async () => {
  try {
    const connection = await createConnection();
    console.log('banco de dados conectado com sucesso.');
    
    process.exit(0);
  } catch (error: unknown) {
    console.log('erro inesperado');
    process.exit(1);
  }
};

start();