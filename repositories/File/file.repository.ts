import { customAxios } from "../../lib/Axios/customAxios";
import { FileResponse } from "../../types/File/file.type";

class FileRepository {
  public async postFileUpload(file: FormData): Promise<FileResponse> {
    const { data } = await customAxios.post("/file/upload", file);
    return data;
  }
}

export default new FileRepository();
