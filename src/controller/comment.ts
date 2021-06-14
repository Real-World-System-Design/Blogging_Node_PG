import { getRepository } from "typeorm";
import { Article } from "../model/Article";
import { Comment } from "../model/Comment";
import { User } from "../model/User";
import { sanitization } from "../Utils/security";

interface commentData {
    body: string
}

export async function postComment(data: commentData,email: string , slug: string): Promise<Comment> {
    //validation
    if(!data.body) throw new Error("body is empty");

    try {
        const repo = getRepository(Comment);
        const userRepo = getRepository(User);
        const articleRepo = getRepository(Article);

        const user = await userRepo.findOne(email);
        if(!user) throw new Error("user with this email not found");
        
        const article = await articleRepo.findOne(slug);
        if(!article) throw new Error("No article found");

        const comment = repo.save(new Comment(
            data.body,
            await sanitization(user)
        ));
        return comment;
    } catch (e) {
        throw e;
    }
}