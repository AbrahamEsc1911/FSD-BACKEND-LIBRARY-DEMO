import "reflect-metadata"
import 'dotenv/config'
import { DataSource } from "typeorm"
import { Authors1719825047836 } from "./migrations/1719825047836-authors"
import { User1719825118738 } from "./migrations/1719825118738-user"
import { Books1719832311979 } from "./migrations/1719832311979-books"
import { Favourites1719906674593 } from "./migrations/1719906674593-favourites"

export const AppDataSource = new DataSource({
type: "mysql",
host: process.env.DB_HOST,
port: Number(process.env.DB_PORT),
username: process.env.DB_USERNAME,
password: process.env.DB_PASWORD,
database: process.env.DB_DATABASE,
entities: [`${__dirname}/models/**/*{.ts,.js}`],
// migrations : [Authors1719825047836, User1719825118738, Books1719832311979],
migrations : [Authors1719825047836, User1719825118738, Books1719832311979, Favourites1719906674593],
synchronize: false,
logging: false,
})