import { getRepository } from "typeorm";
import { User } from "../model/User";

export async function getAllUsers(): Promise<User[]> {
    const repo = getRepository(User);

    const users = repo.find();

    return users;
}

/*
export async function addUsers():Promise<User> {
    const repo = getRepository(User);
}
*/