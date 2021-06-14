import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity("comments")
export class Comment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    body: string

    @ManyToOne(() => User)
    author: User

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    constructor(body: string, author: User) {
        this.body = body
        this.author = author
    }
}