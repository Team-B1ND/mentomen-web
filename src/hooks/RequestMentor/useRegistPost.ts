import { MenToMenToast } from "@/util/Toast/menToMenToast";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useFileUploadMutation } from "@/queries/File/file.query";
import {
  useDeletePostMutation,
  usePostMySubmitMutation,
  usePatchMyPostMutation,
} from "@/queries/Post/post.query";
import { PostSubmitType } from "@/types/List/list.type";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";
import { QUERY_KEYS } from "@/queries/queryKey";

export const useRegistPost = () => {
  const [imgUrl, setImgUrl] = useState<string[]>([]);
  const [content, setContent] = useState("");
  const [postData, setPostData] = useState<PostSubmitType>({
    content: "",
    imgUrls: [],
    tag: "",
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
    // 브라우저 식별 => 크롬은 content 엔터키를 입력하면 줄바꿈이 2번되기 때문에
    const isChrome =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    // 크롬이라면 두 번 연속으로 나타나는 줄바꿈을 하나의 줄바꿈으로 처리
    if (isChrome) {
      setContent(e.currentTarget.innerText.replace(/\n\n/g, "\n"));
    } else {
      // 아니라면 그냥 현재의 텍스트를 그대로 유지
      setContent(e.currentTarget.innerText);
    }
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
            QUERY_KEYS.Post.getList,
            QUERY_KEYS.Post.getApost(postId),
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
              QUERY_KEYS.Post.getList,
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
