import { customAxios } from "../../lib/Axios/customAxios";
import { ParamType } from "../../types/Param/param.type";

class DeleteRepository {
  public async delPost({ postId }: ParamType): Promise<void> {
    await customAxios.delete(`/post/delete/${postId}`);
  }
}

export default new DeleteRepository();
