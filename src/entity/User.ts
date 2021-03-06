import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, BaseEntity,  } from "typeorm"

@Entity()
export class User extends BaseEntity {

    @PrimaryColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}
