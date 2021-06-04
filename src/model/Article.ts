import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("articles")
export class Article{
    @PrimaryColumn()
    slug: string

    @Column({type: 'text'})
    title: string

    @Column({type: 'text'})
    body: string

    @Column({type: 'text'})
    tags: string[]

    constructor(slug: string, title: string, body: string, tags: string[]){
        this.body = body,
        this.title = title,
        this.slug = slug,
        this.tags = tags
    }
}