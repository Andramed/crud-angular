import 'reflect-metadata';
import {DataSource} from 'typeorm';
import { Photo } from '../entity/Photo';


const AppDataSourcePhoto = new DataSource ({
	type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Lumia530",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Photo],
    migrations: [],
    subscribers: [],
})


export default AppDataSourcePhoto