import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn} from 'typeorm'
export type TypeOfPost = {
    title: string,
    img: string,
    text: string
}
@Entity('post')
export class Post {
    
    @PrimaryColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    img!: string;

    @Column()
    date!: Date;

    @Column()
    text!: string;

    @OneToMany(()=> Comment, (comment) => comment.post)
    @JoinColumn()
    comments!: Comment[];

    constructor(props?:TypeOfPost){
        if(props){
            this.comments = [];
            this.text = props.text;
            this.date = new Date();
            this.title = props.title;
            this.img = props.img;    
        }
        
    }

    static of(props:TypeOfPost){
            return new Post(props);
    }
};

@Entity('comment')
export class Comment {
    
    @PrimaryColumn()
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
