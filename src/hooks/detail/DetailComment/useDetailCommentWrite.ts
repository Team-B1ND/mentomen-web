import { useCallback, useState } from "react";
import { QueryClient } from "react-query";
import { usePostComment } from "../../../querys/Comment/comment.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";

export const useDetailCommentWrite = (postId: number) => {
  const [comment, SetComment] = useState<string>("");
  const commentMutaion = usePostComment(); //댓글 등록하기
  const queryClient = new QueryClient();

  const onRegisterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      SetComment(e.target.value);
    },
    []
  );

  const onRegisterClick = useCallback(
    (e?: React.MouseEvent<SVGElement>) => {
      if (comment !== "") {
        const answer = window.confirm("댓글을 등록하시겠습니까?");
        if (answer === true) {
          e?.preventDefault();
          commentMutaion.mutate(
            {
              content: comment,
              postId: postId,
            },
            {
              onSuccess: () => {
                B1ndToast.showSuccess("댓글이 작성되었습니다!");
                SetComment("");
                queryClient.invalidateQueries(["comment/submit", postId]);
              },
              onError: () => {
                B1ndToast.showError("댓글을 작성하지 못했습니다!");
              },
            }
          );
        }
      } else B1ndToast.showInfo("댓글을 작성해주세요!");
    },
    [comment, postId, commentMutaion]
  );

  const onRegisterKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onRegisterClick();
      }
    },
    [onRegisterClick]
  );

  return { onRegisterClick, onRegisterKeyPress, onRegisterChange, comment };
};
