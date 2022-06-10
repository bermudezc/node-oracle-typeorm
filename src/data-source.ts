import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "oracle",
    host: "10.173.97.198"  ,
    port: 1521,
    username: "carlos",
    password: "carlos",
    database: "carlos",
    sid: "XE",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
