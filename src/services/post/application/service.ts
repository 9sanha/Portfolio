import {Inject, Service} from 'typedi'
import {TypeOfPost, Post} from '../domain/model'
import { PostRepository } from '../infrastructure/repository';

@Service()
export class PostService{

    @Inject()
    private postRepository!: PostRepository;
    
    register(props:TypeOfPost){
        console.log('서비스 동작중');
        
        const post = Post.of(props);
        this.postRepository.save(post);
    }

}