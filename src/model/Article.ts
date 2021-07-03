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

    @Column({type: 'text', nullable: true})
    tags?: string[]

    @ManyToOne(() => User)
    author: User

    constructor(slug: string, title: string, body: string, tags: string[], author: User) {
        this.slug = slug
        this.title = title
        this.body = body
        this.tags = tags
        this.author = author
    }
}