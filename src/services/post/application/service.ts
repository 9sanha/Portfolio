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

}