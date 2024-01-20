import { MenToMenToast } from "@/src/util/Toast/menToMenToast";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { PostSubmitType } from "@/src/types/List/list.type";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";
import { useRecoilState } from "recoil";
import { ExistingPostDataAtom } from "@/src/stores/Post/post.store";
import {
  useDeletePostMutation,
  usePatchMyPostMutation,
  usePostMySubmitMutation,
} from "@/src/services/Post/mutations";
import { useFileUploadMutation } from "@/src/services/File/mutations";
import { QUERY_KEYS } from "@/src/constants/Auth/auth.constant";

export const useRegistPost = () => {
  const [existingData, setExistData] = useRecoilState(ExistingPostDataAtom);

  const [imgUrl, setImgUrl] = useState<string[]>(existingData?.imgUrls || []);

  const [content, setContent] = useState(existingData?.content || "");
  const [postData, setPostData] = useState<PostSubmitType>({
    content: "",
    imgUrls: [],
    tag: existingData?.tag || "",
  });

  const selectFileImage = useRef<HTMLInputElement>(null);
  const isRequiredPostData = content.trim() !== "" && postData.tag !== "";

  const formData = new FormData();
  const router = useRouter();
  const { queryInvalidates } = useQueryInvalidates();

  const deletePost = useDeletePostMutation();
  const fileUpload = useFileUploadMutation();
  const postSubmit = usePostMySubmitMutation();
  const editSubmit = usePatchMyPostMutation();

  const handlePageOutEvent = () => {
    if (content.trim() !== "" || postData.tag !== "" || imgUrl.length !== 0) {
      const answer = window.confirm(
        "작성하신 글을 저장되지 않습니다! 나가시겠습니까?"
      );
      if (!answer) return;
    }
    router.back();
  };

  const handleFileUpload = (selectedFiles: FileList) => {
    const filesArray = Array.from(selectedFiles) as File[];

    filesArray.map((item) => {
      formData.append("file", item);
    });

    fileUpload.mutate(formData, {
      onSuccess: (res) => {
        res.data.map((item) => setImgUrl((prev) => [...prev, item.imgUrl]));
      },
    });
  };

  const handleFileUploadClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFiles = selectFileImage.current?.files;
    handleFileUpload(selectedFiles!);
  };

  const handleFileUploadDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const selectedFiles = e.dataTransfer.files;
    handleFileUpload(selectedFiles);
  };

  const handleRequestMentorInputChange = (
    e: React.ChangeEvent<HTMLDivElement>
  ) => {
    setContent(e.currentTarget.innerText.trim()!);
  };

  const handleDeletePostClick = (
    postId: number,
    setIsActivePostSetting: Dispatch<SetStateAction<boolean>>
  ) => {
    const answer = window.confirm("해당 게시글을 삭제하시겠습니까?");
    if (answer) {
      deletePost.mutate(postId, {
        onSuccess: () => {
          queryInvalidates([
            QUERY_KEYS.Post.getAllPost,
            QUERY_KEYS.Post.getPostById(postId),
            QUERY_KEYS.User.getMyPost,
            ["post/GetTagQuery"],
          ]);

          if (router.pathname === "/detail/[id]") {
            router.push("/");
          }

          MenToMenToast.showSuccess("게시글을 삭제하였습니다.");
        },
        onError: () => {
          MenToMenToast.showError("게시글을 삭제하지 못했습니다.");
        },
        onSettled: () => {
          setIsActivePostSetting(false);
        },
      });
    }
  };

  const handlePostSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (content.trim() !== "" && postData.tag !== "") {
      const { tag } = postData;

      postSubmit.mutate(
        { content: content.trim(), tag, imgUrls: imgUrl },
        {
          onSuccess: () => {
            queryInvalidates([
              QUERY_KEYS.Post.getAllPost,
              QUERY_KEYS.User.getMyPost,
            ]);

            MenToMenToast.showSuccess("게시글을 작성하였습니다.");
            router.push("/");
          },
          onError: (e) => {
            MenToMenToast.showError("게시글을 작성하지 못했습니다.");
          },
        }
      );
    }
  };

  return {
    postData,
    setPostData,

    imgUrl,
    setImgUrl,

    content,
    setContent,

    existingData,
    setExistData,

    selectFileImage,
    isRequiredPostData,
    handlePageOutEvent,

    handleFileUploadClick,
    handleFileUploadDrop,

    handleRequestMentorInputChange,
    handleDeletePostClick,
    handlePostSubmit,
  };
};
