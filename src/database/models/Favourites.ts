import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Books } from "./Books"

@Entity('favourites')
export class Favourites extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'user_id' })
    user_id!: number

    @Column({ name: 'books_id' })
    books_id!: number

    @ManyToOne(() => User, user => user.favourites_books)
    @JoinColumn({ name : 'user_id'})
    user!: User

    @ManyToOne(()=> Books, book => book.book_favs)
    @JoinColumn({ name: 'books_id' })
    book!: Books
}
