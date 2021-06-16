import {Request, Response, NextFunction} from 'express';
import * as redis from 'redis';

const client = redis.createClient();

export async function global_cache(req: Request, res: Response, next: NextFunction) {
    client.get('postData', (err, redis_data) => {
        if(err) throw err
        if(redis_data) {
            console.log('redis_data');
            res.send(JSON.parse(redis_data));
        }else{
            next();
        };
    });
};