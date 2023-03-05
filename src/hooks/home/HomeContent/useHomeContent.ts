import { useRecoilState } from "recoil";
import { ImgList, Text, Tag } from "../../../recoil/home/HomeAtom";
import { usePostMySubmit } from "../../../querys/list/list.query";
import { QueryClient } from "react-query";
import { customAxios } from "../../../lib/axios/customAxios";
import { useCallback } from "react";
import { PostSubmitType } from "../../../types/list/list.type";
import { B1ndToast } from "@b1nd/b1nd-toastify";

export const useHomeContent = () => {
  const [text, SetText] = useRecoilState<string>(Text);
  const [imgList, SetImgList] = useRecoilState<string[]>(ImgList);
  const [tag, SetTag] = useRecoilState<string>(Tag);

  const MyPostMutation = usePostMySubmit();
  const queryClient = new QueryClient();

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      SetText(e.target.value);
    },
    [SetText]
  );

  const onSubmit = useCallback(
    (arr: string[]) => {
      const answer = window.confirm("글을 올리시겠습니까?");
      if (answer === true) {
        const data: PostSubmitType = {
          content: text,
          imgUrls: arr,
          tag: tag.toUpperCase(),
        };
        MyPostMutation.mutate(data, {
          onSuccess: () => {
            B1ndToast.showSuccess("글이 등록되었습니다!");
            queryClient.invalidateQueries("/post/submit");
          },
          onError: (err: any) => {
            B1ndToast.showError("글을 등록하지 못했습니다!");
            console.log(err);
          },
          onSettled: () => {
            SetTag("");
            SetText("");
            SetImgList([]);
          },
        });
      }
    },
    [text, imgList, tag]
  );

  const onKeyDown = useCallback(
    async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter") {
        if (text !== "" && tag !== "") {
          const arr: string[] = [];
          const formData = new FormData();
          try {
            if (imgList.length !== 0) {
              for (let i = 0; i < imgList.length; i++) {
                formData.append("file", imgList[i]);
              }
              const { data } = await customAxios.post("/file/upload", formData);
              data.data.forEach((value: string) => {
                arr.push(value);
              });
            }
            console.log(arr);
            onSubmit(arr);
          } catch (e: any) {
            console.log(e);
          }
        } else B1ndToast.showInfo("제대로 입력해주세요!");
      }
    },
    [imgList, onSubmit, tag, text]
  );

  return { onChange, onKeyDown, text };
};
