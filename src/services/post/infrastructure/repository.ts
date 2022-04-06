import { Service } from 'typedi';
import { AppDataSource } from '../../../lib/typeorm';
import { Post } from '../domain/model';
import { badRequest } from '../../../const/boom';
@Service()
export class PostRepository {
    private repository = AppDataSource.getRepository(Post);

    save(post: Post) {
        return this.repository.save(post);
    }

    async find() {
        return await this.repository.find();
    }

    async findById(id: number) {
        return await this.repository
            .findOneOrFail({ relations: ['comments'], where: { id } })
            .catch(() => {
                throw badRequest.NO_EXIST_ENTITY_ERROR;
            });
    }

    delete(postId: number) {
        this.repository.softDelete(postId);
    }
}
