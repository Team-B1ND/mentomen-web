import { ListResponse } from "../../interface/list/list.type";
import { customAxios } from "../../lib/axios/customAxios";

class ListRepository {
  public async getList(): Promise<ListResponse> {
    const { data } = await customAxios.get("/post/read-all");
    return data;
  }
}

export default new ListRepository();
