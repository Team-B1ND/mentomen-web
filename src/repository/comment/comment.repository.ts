import { customAxios } from "../../lib/axios/customAxios";
import { commentType } from "../../types/comment/comment.type";

class CommentRepository {
    public async postComment({
        content,
        postId,
    }:commentType):Promise<void>{
        await customAxios.post('/comment/submit',{
            content,
            postId,
        });
    }
}

export default new CommentRepository();