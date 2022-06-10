import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const myDataSource = new DataSource({
    type: "oracle",
    host: "10.173.97.198",
    port: 1521,
    username: "carlos",
    password: "carlos",
    sid: "xe",
    entities: [User],
    synchronize: true,
})