import { DataSource } from 'typeorm';
import { mysqlConfig } from '../config/mysql';

export const AppDataSource = new DataSource(mysqlConfig);
