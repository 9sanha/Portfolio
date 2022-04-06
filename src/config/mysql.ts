import { DataSourceOptions } from 'typeorm';
import 'dotenv/config';

export default {
    type: 'mysql',
    host: process.env.MYSQL2_HOST,
    port: Number(process.env.MYSQL2_PORT),
    database: process.env.MYSQL2_DATABASE,
    username: process.env.MYSQL2_USER,
    password: process.env.MYSQL2_PASSWORD,
    entities: ['dist/services/post/domain/*.js', 'dist/services/profile/domain/*.js'],
    synchronize: true,
    logging: false,
} as DataSourceOptions;
