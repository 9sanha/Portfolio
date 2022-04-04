import { Spec } from "koa-joi-router";
import { PostService } from "../../../../services/post/application/service";
import Container from "typedi";
export default {
    path: '/posts/update/:postId',
    method: 'patch',
    handler: async (ctx) => {
        // 1. ctx destructuring
        const postId = Number(ctx.request.params.postId);
        const patchData:{title?:string, text?: string} = ctx.request.body;
        // 2. 서비스 호출
        // 2.1. 서비스 객체 획득
        const service = Container.get(PostService);
        // 2.2. 서비스 params 선언
        // 2.3. 서비스 호출
        const data = await service.update(postId,patchData); 
        // 3. 서비스 결과값 body 로 설정
        ctx.body = { data };
    }
}as Spec;