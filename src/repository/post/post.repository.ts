import { customAxios } from "../../lib/axios/customAxios";
import { PostSubmitType } from "../../types/list/list.type";

class PostRepository{
    public async postMySubmit(data:PostSubmitType): Promise<void> {
        await customAxios.post('/post/submit',data);
    }
}

export default new PostRepository();