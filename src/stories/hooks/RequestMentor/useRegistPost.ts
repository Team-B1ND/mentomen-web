import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { ExistingPostDataAtom } from "@/src/store/Post/post.store";
import {
  useDeletePostMutation,
  usePatchMyPostMutation,
  usePostMySubmitMutation,
} from "@/src/services/Post/mutations";
import { useFileUploadMutation } from "@/src/services/File/mutations";
import { QUERY_KEYS } from "../../core";
import { useQueryInvalidates } from "../Invalidates";
import { MenToMenToast } from "../../utils";

export const useRegistPost = (type?: "WRITE" | "MODIFY") => {
  const [existingData, setExistData] = useRecoilState(ExistingPostDataAtom);
  const [imgUrl, setImgUrl] = useState<string[]>(
    type === "MODIFY" ? existingData?.imgUrls ?? [] : []
  );
  const [content, setContent] = useState(
    type === "MODIFY" ? existingData?.content : ""
  );
  const [tag, setTag] = useState(type === "MODIFY" ? existingData?.tag! : "");
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
    const filesArray = Array.from(selectedFiles) as File[];

    filesArray.map((item) => {
      formData.append("file", item);
    });

    ImageFileUpload.mutate(formData, {
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

  const handleDeletePostClick = (postId: number) => {
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
      });
    }
  };

  const handlePostSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (content?.trim() !== "" && tag !== "") {
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
              MenToMenToast.showSuccess("게시글을 수정하였습니다.");
              router.push("/");
              localStorage.removeItem("recoil-persist");
            },
            onError: (e) => {
              MenToMenToast.showError("게시글을 수정하지 못했습니다.");
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
            MenToMenToast.showSuccess("게시글을 작성하였습니다.");
            router.push("/");
          },
          onError: (e) => {
            MenToMenToast.showError("게시글을 작성하지 못했습니다.");
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

    selectFileImage,
    handlePageOutEvent,

    handleFileUploadClick,
    handleFileUploadDrop,

    handleRequestMentorInputChange,
    handleDeletePostClick,
    handlePostSubmit,
  };
};
