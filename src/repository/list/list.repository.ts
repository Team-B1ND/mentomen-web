import { customAxios } from "../../lib/axios/customAxios";
import { ListResponse } from "../../types/list/list.type";

class ListRepository {
  public async getList(): Promise<ListResponse> {
    const { data } = await customAxios.get("/post/read-all");
    return data;
  }
}

export default new ListRepository();
