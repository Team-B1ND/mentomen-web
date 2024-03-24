import { FileResponse } from "@/src/stories/core";
import { MenToMenAxios } from "@/src/libs/Axios/MenToMenAxios";

class FileApi {
  public async postFileUploadApi(file: FormData): Promise<FileResponse> {
    const { data } = await MenToMenAxios.post("/file/upload", file);
    return data;
  }
}

export default new FileApi();
