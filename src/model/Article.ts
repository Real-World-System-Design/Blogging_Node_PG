import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";

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

    @ManyToOne(() => User)
    author: User

    constructor(slug: string, title: string, body: string, tags: string[], author: User){
        this.body = body,
        this.title = title,
        this.slug = slug,
        this.tags = tags,
        this.author = author
    }
}