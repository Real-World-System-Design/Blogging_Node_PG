import {Router} from 'express';
import {userRoutes} from './userRoute';
import {articleRoutes} from './articleRoute';
const route = Router();

route.use('/users', userRoutes);
route.use('/articles', articleRoutes);

export const allRoutes = route;