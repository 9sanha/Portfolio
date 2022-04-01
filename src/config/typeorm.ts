import { DataSource  } from "typeorm"
import { mysqlConfig } from './mysql';

console.log(mysqlConfig);

export const AppDataSource = new DataSource(mysqlConfig);

