import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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

}
