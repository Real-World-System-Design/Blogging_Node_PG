import express from 'express';
import { createConnection } from 'typeorm';
import { Article } from './model/Article';
import { Comment } from './model/Comment';
import { User } from './model/User';
import {allRoutes} from './route/allRoutes';
const app = express();

app.use(express.json() as any);
app.use(allRoutes);

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send("Hlw server is running")
});

function start() {
        createConnection({
        type: 'sqlite',
        database:':memory:',
        synchronize: true,
        entities: [User, Article, Comment],
        logging: true,
        logger: 'advanced-console'
    });
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
}
start();
