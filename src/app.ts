import express from 'express';
import { createConnection } from 'typeorm';
import { Article } from './model/Article';
import { User } from './model/User';
import {allRoutes} from './route/allRoutes';
const app = express();

app.use(express.json() as any);

app.use(allRoutes);

app.get('/', (req, res) => {
    res.send("Hlw server is running")
});

async function start() {
    await createConnection({
        type: 'postgres',
        username: 'conduit',
        password: 'conduit',
        database: 'conduit',
        synchronize: true,
        entities: [User, Article],
        dropSchema: true,
        logging: true,
        logger: 'advanced-console'
    })
    app.listen(3000, () => console.log(`http://localhost:3000`));
}
start();