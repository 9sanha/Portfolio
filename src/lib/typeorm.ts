import { DataSource } from 'typeorm';
import dbConfig from '../config/mysql';

export const AppDataSource = new DataSource(dbConfig);
