import { getRepository } from "typeorm";
import { Article } from "../model/Article";

interface articleData{
    body: string,
    title: string,
    tags: string[]
}

export async function getAllArticles(): Promise<Article[]> {
    const repo = getRepository(Article);

    const articles = await repo.find();

    return articles;
}


export async function createArticle(data: articleData):Promise<Article> {
    //validation
    if(!data.body) throw new Error("body field is empty");
    if(!data.title) throw new Error("title field is empty");
    if(!data.tags) throw new Error("tags field is empty");
    
    try {
        const repo = getRepository(Article);
        const article = repo.save(new Article(
            data.title,
            data.title,
            data.body,
            data.tags
        ));

        return article;
    } catch (e) {
        throw e
    }
}

// export async function updateArticle(): Promise<Article> {
    
// }

// export async function deleteArticle(): Promise<Article> {
    
// }