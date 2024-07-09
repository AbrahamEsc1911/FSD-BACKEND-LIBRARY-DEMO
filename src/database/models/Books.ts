import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Authors } from "./Authors"
import { Favourites } from "./Favourites"

@Entity('books')
export class Books extends BaseEntity {
    @PrimaryGeneratedColumn()
    id! : number

    @Column({ name : 'title'})
    title! : string

    @Column({ name : 'description'})
    description! : string

    @Column({ name : 'authors_id'})
    authorId! : number

    @ManyToOne(() => Authors, author => author.books)
    @JoinColumn({name:"authors_id"})
    author!: Authors

    @OneToMany(() => Favourites, favourite => favourite.book)
    book_favs!: Favourites[]

}
