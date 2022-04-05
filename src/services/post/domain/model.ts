import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'
export type TypeOfPost = {
    title: string,
    img: string,
    text: string
}
export type TypeOfComment = {
    nickname:string, 
    password:string,
    context: string
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

    addComment(comment: Comment){
        this.comments.push(comment);
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

    @CreateDateColumn({ name: 'create_date' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_date' })
    updatedAt!: Date;

    @DeleteDateColumn({name: 'delete_date'})
    deletedAt!: Date;
    
    @ManyToOne(()=>Post, (post) => post.comments )
    post!: Post;

    constructor(props?:TypeOfComment){
        if (props) {
        this.nickname = props.nickname ?? '';
        this.context = props.context ?? '';
        this.password = props.password ?? '';
        }
    }
    
    static of(props:TypeOfComment){
        return new Comment(props);
    }

};
