import {Router} from 'express';
import {userRoutes} from './userRoute';
import {articleRoutes} from './articleRoute';
import {commentRoute} from './commentRoute';
const route = Router();

route.use('/users', userRoutes);
route.use('/articles', articleRoutes);
route.use('/comment', commentRoute);

export const allRoutes = route;