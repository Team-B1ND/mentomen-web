import {
  useDeleteComment,
  usePatchComment,
} from "../../../querys/comment/comment.query";
import { QueryClient } from "react-query";
import { patchCommentType } from "../../../types/comment/comment.type";
import { B1ndToast } from "@b1nd/b1nd-toastify";

export function useCommentModify() {
  const patch = usePatchComment();
  const del = useDeleteComment();
  const queryClient = new QueryClient();

  const onCommentDelete = (postId: number) => {
    const answer = window.confirm("댓글을 삭제하시겠습니까?");
    if (answer === true) {
      del.mutate({
        postId: postId,
      },
      {
        onSuccess: ()=>{
            B1ndToast.showSuccess('댓글이 삭제되었습니다!');
            queryClient.invalidateQueries('/comment/delete');
        },
        onError: (e) => {
            B1ndToast.showError('댓글을 삭제하지 못했습니다!');
            console.log(e);
        }
      });
    }
  };
  
  return {onCommentDelete};
}
