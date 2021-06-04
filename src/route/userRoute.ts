import {Router} from 'express';
import { getAllUsers } from '../controller/user';

const route = Router();

route.get('/', async(req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).send(users); 
    } catch (e) {
        res.status(500).send(e);
    }
})

export const userRoutes = route;