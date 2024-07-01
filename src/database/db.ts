import "reflect-metadata"
import 'dotenv/config'
import { DataSource } from "typeorm"
import { Authors1719825047836 } from "./migrations/1719825047836-authors"

export const AppDataSource = new DataSource({
type: "mysql",
host: process.env.DB_HOST,
port: Number(process.env.DB_PORT),
username: process.env.DB_USERNAME,
password: process.env.DB_PASWORD,
database: process.env.DB_DATABASE,
entities: [],
migrations : [Authors1719825047836],
synchronize: false,
logging: false,
})