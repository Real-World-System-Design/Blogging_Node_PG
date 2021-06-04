import {Router} from 'express';
import { deleteArticle, getAllArticles, updateArticle } from '../controller/article';

const route = Router();

route.get('/', async(req, res) => {
    try {
        const users = await getAllArticles();
        res.status(200).send(users); 
    } catch (e) {
        res.status(500).send(e);
    }
});

// route.post('/', async(req, res) => {
//     try {
//         const user = await createArticle(req.body);
//         res.status(200).send(user);
//     } catch (e) {
//         res.status(500).send(e);
//     }
// })

route.patch('/:slug', async(req, res) =>{
    try {
        const user = await updateArticle(req.body, req.params.slug);
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send(e);
    }
})

route.delete('/:slug', async(req, res) => {
    try {
        const user = await deleteArticle(req.params.slug);
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send(e);
    }
})

export const articleRoutes = route;