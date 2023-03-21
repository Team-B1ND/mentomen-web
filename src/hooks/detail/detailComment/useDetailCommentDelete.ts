import { useDeleteComment } from "../../../querys/comment/comment.query";
import { QueryClient } from "react-query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useRecoilState } from "recoil";
import { CommentModal } from "../../../recoil/detail/DetailAtom";
import { useCallback } from "react";

export function useDetailCommentDelete() {
  const del = useDeleteComment();
  const [commentModal,SetCommentModal] = useRecoilState<boolean>(CommentModal);
  const queryClient = new QueryClient();
  const onCommentDelete = useCallback((postId: number) => {
    const answer = window.confirm("댓글을 삭제하시겠습니까?");   
    if (answer === true) {
      del.mutate({
        postId: postId,
      },
      {
        onSuccess: ()=>{
            SetCommentModal(!commentModal);
            B1ndToast.showSuccess('댓글이 삭제되었습니다!');
            queryClient.invalidateQueries('/comment/delete');
        },
        onError: () => {
            B1ndToast.showError('댓글을 삭제하지 못했습니다!');
        }
      });
    }
  },[]);
  
  return {onCommentDelete};
}
