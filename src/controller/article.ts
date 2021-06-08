import { getRepository } from "typeorm";
import { Article } from "../model/Article";
import { User } from "../model/User";
import { slugify } from "../Utils/stringUtils";

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


export async function createArticle(data: articleData, email: string):Promise<Article> {
    //validation
    if(!data.body) throw new Error("body field is empty");
    if(!data.title) throw new Error("title field is empty");
    if(!data.tags) throw new Error("tags field is empty");
    
    try {
        const repo = getRepository(Article);
        const uRepo = getRepository(User);
    
        const user = await uRepo.findOne(email);

        const article = repo.save(new Article(
            slugify(data.title),
            data.title,
            data.body,
            data.tags,
            user!!
        ));

        return article;
    } catch (e) {
        throw e
    }
}

export async function updateArticle(data: articleData, slug: string): Promise<Article> {
    
    try {
        const repo = getRepository(Article);
        const article = await repo.findOne(slug);
        
        if(!article) throw new Error("No aricle with this slug exists");

        if(data.body) article.body = data.body;
        if(data.title) article.title = data.title;
        if(data.tags) article.tags = data.tags;

        const  updatedArticle = await repo.save(article);
        return updatedArticle;
    } catch (e) {
        throw e
    }
}

export async function deleteArticle(slug: string) {
    
    try {
        const reop = getRepository(Article);
        const article = await reop.findOne(slug);

        if(!article) throw new Error("No aricle with this slug exists");
        
        reop.delete(article);
    } catch (e) {
        throw e;
    }
}