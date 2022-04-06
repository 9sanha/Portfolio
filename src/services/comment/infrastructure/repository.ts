import { AppDataSource } from '../../../lib/typeorm';
import { Comment } from '../../../services/post/domain/model';
import { Service } from 'typedi';

@Service()
export class CommentRepository {
    private repository = AppDataSource.getRepository(Comment);

    findById(id: number) {
        return this.repository.find({ relations: ['post'], where: { id } });
    }

    delete(id: number) {
        return this.repository.softDelete(id);
    }
}
