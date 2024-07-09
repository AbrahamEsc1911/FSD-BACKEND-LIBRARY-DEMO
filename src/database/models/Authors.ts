import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Books } from "./Books"

@Entity('authors')
export class Authors extends BaseEntity{
    @PrimaryGeneratedColumn()
    id! : number

    @Column({ name : 'name'})
    name!: string

    @Column({name : 'nationality'})
    nationality! : string

    @OneToMany(()=> Books, books => books.author)
    books!: Books[]
}
