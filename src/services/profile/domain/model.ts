import {Column, Entity, PrimaryColumn} from 'typeorm'
@Entity('profile')
export class Profile {
    
    @PrimaryColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    img!: string;

    @Column()
    context!: string;

};
