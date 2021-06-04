import { getRepository } from "typeorm";
import { User } from "../model/User";

interface registerData{
    username: string,
    password: string,
    email:string
}

export async function getAllUsers(): Promise<User[]> {
    const repo = getRepository(User);

    const users = await repo.find();

    return users;
}


export async function registerUsers(data: registerData):Promise<User> {
    //validation
    if(!data.email) throw new Error("email field is empty");
    if(!data.password) throw new Error("password field is empty");
    if(!data.username) throw new Error("username field is empty");
    
    try {
        const repo = getRepository(User);
        const user = repo.save(new User(
            data.username,
            data.email,
            data.password
        ));

        return user;
    } catch (e) {
        throw e
    }
}

// export async function loginUser(): Promise<User> {
    
// }

// export async function updateUser(): Promise<User> {
    
// }

// export async function deleteUser(): Promise<User> {
    
// }