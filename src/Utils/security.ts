import { User } from "../model/User";

export async function sanitization(user: User) {
    if(user.password) return delete user.password;
    return user;
}