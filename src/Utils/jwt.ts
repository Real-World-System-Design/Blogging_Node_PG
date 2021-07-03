require('dotenv').config()
import jwt from 'jsonwebtoken';
import { User } from '../model/User';

const secret = process.env.JWT_SECRET;

export async function sign(user: User): Promise<string>{
    return new Promise<string>((resolve, reject) => {
        //TODO: add the token exp logic
        jwt.sign({
            username: user.username,
            email: user.email
        }, secret!!, (err: any, encoded: string | undefined) => {
            if(err) throw reject(err)
            return resolve(encoded as string)
        });
    });
};

export async function decode(token: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
        jwt.verify(token, secret!!, (err, decoded) => {
            if(err) throw reject(err)
            return resolve(decoded as User)
        })
    })
}