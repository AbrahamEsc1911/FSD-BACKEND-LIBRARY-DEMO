import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Favourites } from "./Favourites";

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id! : number

    @Column({name : 'name'})
    name! : string

    @Column({name : 'email'})
    email! : string

    @Column({name : 'password'})
    password! : string;

    @Column({name : 'is_active'})
    is_active! : boolean;

    @Column({name : 'role' })
    role! : string;

    @Column({name : 'created_at'})
    created_at! : Date;

    @Column({name : 'updated_at'})
    updated_at! : Date;

    @OneToMany(() => Favourites, favourite => favourite.user)
    favourites_books!: Favourites[]
}
