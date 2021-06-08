import { getRepository } from "typeorm";
import { Comment } from "../model/Comment";
import { User } from "../model/User";

interface commentData {
    body: string
}

export async function getComments(): Promise<Comment[]> {
    const repo = getRepository(Comment);

    const comments = await repo.find();

    return comments;
}

// export async function postComment(data: commentData,email: string , slug: string): Promise<Comment> {
//     //validation
//     if(!data.body) throw new Error("body is empty");

//     try {
//         const repo = getRepository(Comment);
//         const userRepo = getRepository(User);
//         const user = await repo.findOne(email);
//         if(!user) throw new Error("user with this email not found");
//         const comment = repo.save(new Comment(
//             data.body,


//         ))
//     } catch (e) {
//         throw e;
//     }
// }