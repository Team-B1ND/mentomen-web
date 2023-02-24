import { customAxios } from "../../lib/axios/customAxios";
import { ListItemResponse } from "../../types/list/list.type";

class ListRepository {
  public async getList(): Promise<ListItemResponse> {
    const { data } = await customAxios.get("/post/read-all");
    return data;
  }
}

export default new ListRepository();
