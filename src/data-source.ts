import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    name: "development",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "V!bhav@24",
    database: "graphql-ts-server",
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})
export const AppDataSource2 = new DataSource({
    name: "test",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "V!bhav@24",
    database: "graphql-ts-server-test", 
    synchronize: true,
    logging: false,
    dropSchema: true,
    entities: [User],
    migrations: [],
    subscribers: [],
})