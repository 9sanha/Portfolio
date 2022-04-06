import { Inject, Service } from "typedi";
import { TypeOfPost, Post, TypeOfComment } from "../domain/model";
import { PostRepository } from "../infrastructure/repository";
import { Comment } from "../domain/model";

@Service()
export class PostService {
    @Inject()
    private postRepository!: PostRepository;

    register(props: TypeOfPost) {
        const post = Post.of(props);
        return this.postRepository.save(post);
    }

    list() {
        return this.postRepository.find();
    }

    getPostById(postId: number) {
        // TODO: 찾을 수 없는 포스트 일 때 boom
        return this.postRepository.findById(postId);
    }

    delete(postId: number) {
        this.postRepository.delete(postId);
    }

    async update(postId: number, patchData: { title?: string; text?: string }) {
        const post = await this.getPostById(postId);
        post.update(patchData);
        return this.postRepository.save(post);
    }

    async registerComment(postId: number, props: TypeOfComment) {
        const post = await this.getPostById(postId);
        const comment = Comment.of(props);
        post.addComment(comment);
        const comments = (await this.postRepository.save(post)).comments;
        return comments[comments.length - 1];
    }
}
