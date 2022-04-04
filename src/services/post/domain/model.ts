import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
export type TypeOfPost = {
    title: string,
    img: string,
    text: string
}
@Entity('post')
export class Post {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    img!: string;

    @CreateDateColumn({ name: 'create_date' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_date' })
    updatedAt!: Date;

    @Column()
    text!: string;

    @OneToMany(()=> Comment, (comment) => comment.post, {cascade: true})
    @JoinColumn()
    comments!: Comment[];

    constructor(props?:TypeOfPost){
        if (props) {
            this.comments = [];
            this.text = props.text ?? '';
            this.title = props.title ?? '';
            this.img = props.img ?? '';    
        }
    }

    static of(props: TypeOfPost){
            return new Post(props);
    }

    update(post:{title?:string, text?: string}){
        this.text = post.text ?? this.text;
        this.title = post.title ?? this.title;
    }
};

@Entity('comment')
export class Comment {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nickname!: string;

    @Column()
    password!: string;

    @Column()
    context!: string;

    @ManyToOne(()=>Post, (post) => post.comments )
    post!: Post;

    constructor(nickname:string, password:string,context: string ){
        this.nickname = nickname;
        this.context = context;
        this.password = password;
    }

};
