import { customAxios } from "@/src/lib/Axios/customAxios";
import { FileResponse } from "@/src/types/File/file.type";

class FileApi {
  public async postFileUploadApi(file: FormData): Promise<FileResponse> {
    const { data } = await customAxios.post("/file/upload", file);
    return data;
  }
}

export default new FileApi();
