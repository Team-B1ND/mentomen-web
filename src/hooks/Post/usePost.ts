import { B1ndToast } from "@b1nd/b1nd-toastify";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useQueryClient } from "react-query";
import { useFileUploadMutation } from "../../queries/File/file.query";
import {
  useDeletePostMutation,
  usePostMySubmitMutation,
} from "../../queries/Post/post.query";
import { PostSubmitType } from "../../types/List/list.type";

export const usePost = () => {
  const selectFileImage = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState<string[]>([]);
  const [postData, setPostData] = useState<PostSubmitType>({
    content: "",
    imgUrls: [],
    tag: "",
  });

  const formData = new FormData();

  const deletePost = useDeletePostMutation();
  const fileUpload = useFileUploadMutation();
  const postSubmit = usePostMySubmitMutation();
  const queryClient = useQueryClient();

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

    postSubmit.mutate(
      { content, tag, imgUrls: imgUrl },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("list/useGetList");
          queryClient.invalidateQueries("user/post");
          B1ndToast.showSuccess("게시글을 등록하였습니다.");
          setIsActivePostForm(false);
        },
        onError: () => {
          B1ndToast.showError("게시글을 등록하지 못했습니다.");
        },
      }
    );
  };

  return {
    setPostData,
    postData,
    imgUrl,

    handleFileUploadChange,
    selectFileImage,

    handleDeletePostClick,
    handlePostSubmit,
  };
};
