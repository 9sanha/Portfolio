import { DataSource } from "typeorm"
import { mysqlConfig } from './mysql';

export const AppDataSource = new DataSource(mysqlConfig);

