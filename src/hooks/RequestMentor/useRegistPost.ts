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
  const selectFileImage = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState<string[]>([]);
  const [content, setContent] = useState("");
  const [postData, setPostData] = useState<PostSubmitType>({
    content: "",
    imgUrls: [],
    tag: "",
  });

  const formData = new FormData();
  const router = useRouter();

  const deletePost = useDeletePostMutation();
  const fileUpload = useFileUploadMutation();
  const postSubmit = usePostMySubmitMutation();
  const editSubmit = usePatchMyPostMutation();
  const { queryInvalidates } = useQueryInvalidates();

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
    setContent(e.currentTarget?.innerText);
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

  const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { tag } = postData;

    if (tag === "") {
      MenToMenToast.showInfo("태그를 지정해주세요.");
      return;
    }

    if (content.trim() === "") {
      MenToMenToast.showInfo("글을 작성해주세요.");
      return;
    }

    postSubmit.mutate(
      { content: content.trimEnd(), tag, imgUrls: imgUrl },
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
  };

  return {
    postData,
    setPostData,

    imgUrl,
    setImgUrl,

    content,
    setContent,

    selectFileImage,
    handleFileUploadClick,
    handleFileUploadDrop,

    handlePageOutEvent,

    handleRequestMentorInputChange,
    handleDeletePostClick,
    handlePostSubmit,
  };
};
