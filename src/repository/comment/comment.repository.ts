import { customAxios } from "../../lib/axios/customAxios";
import { postCommentType, getCommentResponse} from "../../types/comment/comment.type";
import { ParamType } from "../../types/param/param.type";

class CommentRepository {
    public async postComment({
        content,
        postId,
    }:postCommentType):Promise<void>{
        await customAxios.post('/comment/submit',{
            content,
            postId,
        });
    }

    public async getComment({postId}:ParamType):Promise<getCommentResponse> {
        const { data } = await customAxios.get(`/comment/read/${postId}`);
        return data;
    }
}

export default new CommentRepository();