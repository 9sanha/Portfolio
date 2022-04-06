import {Service} from 'typedi'
import { AppDataSource } from '../../../config/typeorm';
import { Post } from '../domain/model';
import { badRequest } from '../../../const/boom';
@Service()
export class PostRepository{
    
    private repository = AppDataSource.getRepository(Post);
    
    save(post: Post){        
        return this.repository.save(post);
    };

    async find(){
        const posts = await this.repository.find();
        return posts;
    };

    async findById(id: number){
        const post1 =  await this.repository.findOneOrFail({relations: ['comments'], where: {id}}).catch(()=>{
            throw badRequest.NO_EXIST_ENTITY_ERROR;
        });
        
        return post1;
    };

    delete(postId: number) {
        this.repository.softDelete(postId);
    };
}