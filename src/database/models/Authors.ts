import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('authors')
export class Authors extends BaseEntity{
    @PrimaryGeneratedColumn()
    id! : number

    @Column({ name : 'name'})
    name!: string

    @Column({name : 'nationality'})
    nationality! : string
}
