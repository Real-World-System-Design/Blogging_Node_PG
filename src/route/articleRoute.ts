import {Router} from 'express';
import { createArticle, deleteArticle, getAllArticles, updateArticle } from '../controller/article';
import { authByToken } from '../middleware/auth';

const route = Router();

/**
 * Install redis as a docker container and run it .
 * Then only this middleware will run .
 * $node
 * >(process.platform === "win32")? throw new Error("could not able execute the middleware) : "sucessfully lunched"
 * just import this and add to the get all products route
 * import {global_cache} from '../middleware/cache';
 * route.get('/', global_cache, ...... remainting code)
 * cont articles = ......;
 * client.setex('postData', 60, JSON.stringify(articles));
 */

route.get('/', async(req, res) => {
    try {
        const articles = await getAllArticles();
        res.status(200).send(articles); 
    } catch (e) {
        res.status(500).send(e);
    }
});

route.post('/create' ,authByToken ,async(req, res) => {
    try {
        const article = await createArticle(req.body, (req as any).user.email);
        res.status(200).send(article);
    } catch (e) {
        res.status(500).send({
            err: `error ${e}`
        });
    }
})

route.patch('/:slug', async(req, res) =>{
    try {
        const article = await updateArticle(req.body, req.params.slug);
        res.status(200).send(article);
    } catch (e) {
        res.status(500).send(e);
    }
})

route.delete('/:slug', async(req, res) => {
    try {
        const article = await deleteArticle(req.params.slug);
        res.status(200).send(article);
    } catch (e) {
        res.status(500).send(e);
    }
})

export const articleRoutes = route;