import {Router} from 'express';
import { createArticle, getAllArticles } from '../controller/article';

const route = Router();

route.get('/', async(req, res) => {
    try {
        const users = await getAllArticles();
        res.status(200).send(users); 
    } catch (e) {
        res.status(500).send(e);
    }
});

route.post('/', async(req, res) => {
    try {
        const user = await createArticle(req.body);
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send(e);
    }
})

export const userRoutes = route;