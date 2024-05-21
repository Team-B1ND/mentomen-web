import { useMutation } from "react-query";
import { FileApi } from "./file.api";

export const useFileUploadMutation = () => {
  const mutation = useMutation((file: FormData) =>
    FileApi.postFileUpload(file)
  );
  return mutation;
};
