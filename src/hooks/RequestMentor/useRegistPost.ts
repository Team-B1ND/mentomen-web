import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { ExistingPostDataAtom } from "@/src/store/Post/post.store";
import {
  useDeletePostMutation,
  usePatchMyPostMutation,
  usePostMySubmitMutation,
} from "@/src/services/Post/post.mutation";
import { useFileUploadMutation } from "@/src/services/File/file.mutation";
import { QUERY_KEYS } from "../../stories/core";
import { useQueryInvalidates } from "../Invalidates";
import { MenToMenToast } from "../../stories/utils";
import type { AxiosError } from "axios";
import PostErrorHandler from "@/src/stories/utils/Error/PostErrorHandler";
import FileErrorHandler from "@/src/stories/utils/Error/FileErrorHandler";

export const useRegistPost = (type?: "WRITE" | "MODIFY") => {
  const [existingData, setExistData] = useRecoilState(ExistingPostDataAtom);
  const [imgUrl, setImgUrl] = useState<string[]>(
    type === "MODIFY" ? existingData?.imgUrls ?? [] : []
  );
  const [content, setContent] = useState(
    type === "MODIFY" ? existingData?.content : ""
  );
  const [tag, setTag] = useState(type === "MODIFY" ? existingData?.tag! : "");

  const [isRequestImage, setIsRequestImage] = useState(false);
  const selectFileImage = useRef<HTMLInputElement>(null);

  const isRequiredPostData = content?.trim() !== "" && tag !== "";
  const isCoincidePostData =
    JSON.stringify({ content, tag, imgUrl }) ===
    JSON.stringify({
      content: existingData?.content,
      tag: existingData?.tag,
      imgUrl: existingData?.imgUrls ?? [],
    });

  const formData = new FormData();
  const router = useRouter();
  const { queryInvalidates } = useQueryInvalidates();

  const ImageFileUpload = useFileUploadMutation();
  const deletePost = useDeletePostMutation();
  const uploadPost = usePostMySubmitMutation();
  const modifyPost = usePatchMyPostMutation();

  const handlePageOutEvent = () => {
    if (content?.trim() !== "" || tag !== "" || imgUrl.length !== 0) {
      let answer = false;
      if (type === "MODIFY") {
        answer = window.confirm(
          "수정하신 글은 저장되지 않습니다! 나가시겠습니까?"
        );
      } else {
        answer = window.confirm(
          "작성하신 글을 저장되지 않습니다! 나가시겠습니까?"
        );
      }
      if (!answer) return;
    }
    router.back();
  };

  const handleFileUpload = (selectedFiles: FileList) => {
    const filesArray = Array.from(selectedFiles);

    if (filesArray.length > 0) {
      filesArray.map((item) => {
        formData.append("file", item);
      });

      setIsRequestImage(true);
      ImageFileUpload.mutate(formData, {
        onSuccess: (res) => {
          res.data.map((item) => setImgUrl((prev) => [...prev, item.imgUrl]));
        },
        onError: (err) => {
          const errorCode = err as AxiosError;
          MenToMenToast.showError(
            FileErrorHandler.uploadError(errorCode.response?.status!)
          );
        },
        onSettled: () => {
          setIsRequestImage(false);
        },
      });
    }
  };

  const handleFileUploadClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFiles = selectFileImage.current?.files;
    handleFileUpload(selectedFiles!);
  };

  const handleFileUploadDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (!isRequestImage) {
      e.preventDefault();
      const selectedFiles = e.dataTransfer.files;
      handleFileUpload(selectedFiles);
    }
  };

  const handleRequestMentorInputChange = (
    e: React.ChangeEvent<HTMLDivElement>
  ) => {
    setContent(e.currentTarget.innerText.trim()!);
  };

  const handleDeletePostClick = (postId: number) => {
    const answer = window.confirm("해당 멘토 요청 글을 삭제하시겠습니까?");
    if (answer) {
      deletePost.mutate(postId, {
        onSuccess: () => {
          queryInvalidates([
            QUERY_KEYS.Post.getAllPost,
            QUERY_KEYS.Post.getPostById(postId),
            QUERY_KEYS.User.getMyPost,
            ["post/GetTagQuery"],
          ]);

          if (router.pathname.includes("/detail")) {
            router.push("/");
          }

          MenToMenToast.showSuccess("멘토 요청 글을 삭제하였습니다.");
        },
        onError: (e) => {
          const errorCode = e as AxiosError;
          MenToMenToast.showError(
            PostErrorHandler.deletePost(errorCode.response?.status!)
          );
        },
      });
    }
  };

  const handlePostSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (content?.trim() !== "" && tag !== "" && !isRequestImage) {
      const submitData = {
        content: content?.trim()!,
        tag: tag!,
        imgUrls: imgUrl,
      };

      if (type === "MODIFY") {
        if (isCoincidePostData) {
          return MenToMenToast.showInfo("내용을 수정해주세요!");
        }

        modifyPost.mutate(
          {
            postId: existingData?.postId!,
            ...submitData,
          },
          {
            onSuccess: () => {
              queryInvalidates([
                QUERY_KEYS.Post.getAllPost,
                QUERY_KEYS.User.getMyPost,
                QUERY_KEYS.Post.getPostById(existingData?.postId!),
              ]);
              MenToMenToast.showSuccess("멘토 요청 글을 수정하였습니다.");
              router.push(`/detail/${existingData?.postId}`);
              localStorage.removeItem("recoil-persist");
            },
            onError: (e) => {
              const errorCode = e as AxiosError;
              MenToMenToast.showError(
                PostErrorHandler.modifyPost(errorCode.response?.status!)
              );
            },
          }
        );
      } else {
        uploadPost.mutate(submitData, {
          onSuccess: () => {
            queryInvalidates([
              QUERY_KEYS.Post.getAllPost,
              QUERY_KEYS.User.getMyPost,
            ]);
            MenToMenToast.showSuccess("멘토 요청 글을 작성하였습니다.");
            router.push("/");
          },
          onError: (e) => {
            const errorCode = e as AxiosError;
            MenToMenToast.showError(
              PostErrorHandler.registPost(errorCode.response?.status!)
            );
          },
        });
      }
    }
  };

  return {
    tag,
    setTag,

    imgUrl,
    setImgUrl,

    content,
    setContent,

    existingData,
    setExistData,

    isRequiredPostData,
    isCoincidePostData,
    isRequestImage,

    selectFileImage,
    handlePageOutEvent,

    handleFileUploadClick,
    handleFileUploadDrop,

    handleRequestMentorInputChange,
    handleDeletePostClick,
    handlePostSubmit,
  };
};
