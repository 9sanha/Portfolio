import {Service} from 'typedi'
import { AppDataSource } from '../../../config/typeorm';
import { Post } from '../domain/model';
@Service()
export class PostRepository{
    private repository = AppDataSource.getRepository(Post);
    
    save(post: Post){        
        return this.repository.save(post);
    };

    find(){
        return this.repository.find();
    };

    findById(id: number){
        return this.repository.findOneOrFail({relations: ['comments'], where: {id}});
    }
}