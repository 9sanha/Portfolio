// 설정이 적용된 후에 나머지 코드가 실행되야하기 때문에 가장 위에 작성되어야 함
import 'dotenv/config';

import { DataSource  } from "typeorm"

export const connectDB = async (): Promise<void> => {
  await new DataSource({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    entities: [
      'dist/services/devices/domain/*.js',
    ],
    synchronize: true,
    logging: false
  });
};
