import {Inject, Service} from 'typedi'
import {TypeOfPost, Post} from '../domain/model'
import { PostRepository } from '../infrastructure/repository';

@Service()
export class PostService{

    @Inject()
    private postRepository!: PostRepository;
    
    register(props:TypeOfPost){ 
        const post = Post.of(props);
        return this.postRepository.save(post);
    }

    list(){
        return this.postRepository.find();
    }

    getPostById(postId: number){
        // TODO: 찾을 수 없는 포스트 일 때 boom
        return this.postRepository.findById(postId);
    }
}