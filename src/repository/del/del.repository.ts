import { customAxios } from "../../lib/axios/customAxios";
import { ParamType } from "../../types/param/param.type";

class deleteRepository {
    public async delPost({postId}:ParamType):Promise<void>{
        await customAxios.delete(`/post/delete/${postId}`);
    }
}

export default new deleteRepository();