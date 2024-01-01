import { B1ndToast } from "@b1nd/b1nd-toastify";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useQueryClient } from "react-query";
import { useFileUploadMutation } from "../../queries/File/file.query";
import {
  useDeletePostMutation,
  usePostMySubmitMutation,
  usePatchMyPostMutation,
} from "../../queries/Post/post.query";
import { ListItemType, PostSubmitType } from "../../types/List/list.type";

export const usePost = (
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

  const deletePost = useDeletePostMutation();
  const fileUpload = useFileUploadMutation();
  const postSubmit = usePostMySubmitMutation();
  const editSubmit = usePatchMyPostMutation();
  const queryClient = useQueryClient();

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
    setIsActiveSetUp: Dispatch<SetStateAction<boolean>>
  ) => {
    const answer = window.confirm("해당 게시글을 삭제하시겠습니까?");
    if (answer) {
      deletePost.mutate(postId, {
        onSuccess: () => {
          queryClient.invalidateQueries("list/useGetList");
          queryClient.invalidateQueries(["post/read-one", postId]);
          queryClient.invalidateQueries("user/post");
          B1ndToast.showSuccess("게시글을 삭제하였습니다.");
        },
        onError: () => {
          B1ndToast.showError("게시글을 삭제하지 못했습니다.");
        },
        onSettled: () => {
          setIsActiveSetUp(false);
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
      return B1ndToast.showInfo("태그를 지정해주세요.");
    }

    if (content.trim() === "") {
      return B1ndToast.showInfo("글을 작성해주세요.");
    }

    if (isActivePostForm) {
      postSubmit.mutate(
        { content, tag, imgUrls: imgUrl },
        {
          onSuccess: () => {
            queryClient.invalidateQueries("list/useGetList");
            queryClient.invalidateQueries("user/post");
            B1ndToast.showSuccess("게시글을 작성하였습니다.");
            setIsActivePostForm(false);
          },
          onError: (e) => {
            B1ndToast.showError("게시글을 작성하지 못했습니다.");
          },
        }
      );
    } else {
      const { content, tag, imgUrls } = editPostData!!;

      if (
        JSON.stringify({
          content,
          imgUrls: imgUrls ?? [],
          tag,
        }) === JSON.stringify(postData)
      ) {
        B1ndToast.showInfo("글을 수정해주세요!");
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
            queryClient.invalidateQueries("list/useGetList");
            queryClient.invalidateQueries([
              "post/read-one",
              editPostData?.postId!!,
            ]);
            B1ndToast.showSuccess("게시글을 수정하였습니다.");
            setIsActivePostForm(false);
          },
          onError: (e) => {
            B1ndToast.showError("게시글을 수정하지 못했습니다.");
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
