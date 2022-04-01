import { EntitySchema, MixedList } from "typeorm";

export type DataBaseConfig = {
    type: string,
    host: string | undefined,
    port: number,
    database: string | undefined,
    username: string | undefined,
    password: string | undefined,
    entities: MixedList<string | Function | EntitySchema<any>> | undefined,
    synchronize: boolean | undefined,
    logging: boolean | undefined,
    region: undefined | string, 
    secretArn: undefined | string,
    resourceArn: undefined | string 
}