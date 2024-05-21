import { FileResponse } from "@/src/stories/core";
import { MenToMenAxios } from "@/src/libs/Axios/MenToMenAxios";

export const FileApi = {
  postFileUpload: async (file: FormData): Promise<FileResponse> => {
    const { data } = await MenToMenAxios.post("/file/upload", file);
    return data;
  },
};
