import { useMutation } from "react-query";
import FileApi from "./api";

export const useFileUploadMutation = () => {
  const mutation = useMutation((file: FormData) =>
    FileApi.postFileUploadApi(file)
  );
  return mutation;
};
