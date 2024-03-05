import { MenToMenToast } from "@/src/stories/utils";
import axios, { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";
import { useMutation } from "react-query";
import FileApi from "./FileApi";

export const useFileUploadMutation = () => {
  const mutation = useMutation((file: FormData) =>
    FileApi.postFileUploadApi(file)
  );
  return mutation;
};
