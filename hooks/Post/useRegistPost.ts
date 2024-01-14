import { MenToMenToast } from "@/util/Toast/menToMenToast";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useFileUploadMutation } from "@/queries/File/file.query";
import {
  useDeletePostMutation,
  usePostMySubmitMutation,
  usePatchMyPostMutation,
} from "@/queries/Post/post.query";
import { ListItemType, PostSubmitType } from "@/types/List/list.type";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";

export const useRegistPost = (
  isActivePostForm?: boolean,
  editPostData?: ListItemType
) => {
  const cancelWritingPost = isActivePostForm
    ? "글 작성을 취소하시겠습니까?"
    : "글 수정을 취소하시겠습니까?";
  const selectFileImage = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState<string[]>(
    isActivePostForm ? [] : editPostData?.imgUrls ?? []
  );
  const [postData, setPostData] = useState<PostSubmitType>(
    isActivePostForm
      ? {
          content: "",
          imgUrls: [],
          tag: "",
        }
      : {
          content: editPostData?.content!!,
          imgUrls: editPostData?.imgUrls ?? [],
          tag: editPostData?.tag!!,
        }
  );

  const formData = new FormData();
  const router = useRouter();

  const deletePost = useDeletePostMutation();
  const fileUpload = useFileUploadMutation();
  const postSubmit = usePostMySubmitMutation();
  const editSubmit = usePatchMyPostMutation();
  const { queryInvalidates } = useQueryInvalidates();

  const handlePostEditorCancel = (
    setIsActivePostEditForm: Dispatch<SetStateAction<boolean>>
  ) => {
    const answer = window.confirm(cancelWritingPost);

    if (answer) {
      setIsActivePostEditForm(false);
    }
  };

  const handleFileUploadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFiles = selectFileImage.current?.files;
    const filesArray = Array.from(selectedFiles!!) as File[];

    filesArray.forEach((item) => {
      formData.append("file", item);
    });

    fileUpload.mutate(formData, {
      onSuccess: (res) => {
        res.data.map((item) => setImgUrl((prev) => [...prev, item.imgUrl]));
      },
    });
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
            "list/useGetList",
            ["post/read-one", postId.toString()],
            "user/post",
            ["post/GetTagQuery"],
          ]);
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

  const handlePostSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    setIsActivePostForm: Dispatch<SetStateAction<boolean>>
  ) => {
    e.preventDefault();
    const { content, tag } = postData;

    if (tag === "") {
      MenToMenToast.showInfo("태그를 지정해주세요.");
      return;
    }

    if (content.trim() === "") {
      MenToMenToast.showInfo("글을 작성해주세요.");
      return;
    }

    if (isActivePostForm) {
      postSubmit.mutate(
        { content: content.trimEnd(), tag, imgUrls: imgUrl },
        {
          onSuccess: () => {
            queryInvalidates(["list/useGetList", "user/post"]);
            MenToMenToast.showSuccess("게시글을 작성하였습니다.");
            setIsActivePostForm(false);
            router.push("/");
            window.scrollTo(0, 0);
          },
          onError: (e) => {
            MenToMenToast.showError("게시글을 작성하지 못했습니다.");
          },
        }
      );
    } else {
      const { content, tag } = editPostData!!;

      if (
        JSON.stringify({
          content,
          imgUrls: imgUrl,
          tag,
        }) === JSON.stringify(postData)
      ) {
        MenToMenToast.showInfo("글을 수정해주세요!");
        return;
      }

      editSubmit.mutate(
        {
          content: postData.content,
          tag: postData.tag,
          imgUrls: imgUrl,
          postId: editPostData?.postId!!,
        },
        {
          onSuccess: () => {
            queryInvalidates([
              "list/useGetList",
              ["post/read-one", editPostData?.postId!!],
              ["post/GetTagQuery"],
            ]);

            MenToMenToast.showSuccess("게시글을 수정하였습니다.");
            setIsActivePostForm(false);
          },
          onError: (e) => {
            MenToMenToast.showError("게시글을 수정하지 못했습니다.");
          },
        }
      );
    }
  };

  return {
    setPostData,
    postData,
    imgUrl,

    handleFileUploadChange,
    selectFileImage,

    handleDeletePostClick,
    handlePostSubmit,

    handlePostEditorCancel,
    cancelWritingPost,
  };
};
