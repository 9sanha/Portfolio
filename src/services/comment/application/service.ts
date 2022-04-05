import { Inject, Service } from "typedi";
import { CommentRepository } from "../infrastructure/repository";

@Service()
export class CommentService{

    @Inject()
    private commentRepository!: CommentRepository;

    delete(commentId: number){
        return this.commentRepository.delete(commentId);
    }

}