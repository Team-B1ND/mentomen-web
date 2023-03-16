import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { usePatchComment } from "../../../querys/comment/comment.query";
import { CommentContent, CommentEdit } from "../../../recoil/detail/DetailAtom";

export function useDeleteCommentEdit(commentPostId:number){
    const [commentEditContent,SetCommentEditContent] = useRecoilState<string>(CommentContent);
    const [commentEdit, SetCommentEdit] = useRecoilState<boolean>(CommentEdit);

    const patch = usePatchComment();

    const onEditChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        SetCommentEditContent(e.target.value);
    },[]);

    const onEditClick = useCallback((e?:React.MouseEvent<SVGElement>)=>{
        if (commentEditContent !== ""){
            const answer = window.confirm('댓글을 수정하시겠습니까?');
            if (answer === true){
                e?.preventDefault();
                patch.mutate({
                    commentId:commentPostId,
                    content:commentEditContent,
                },
                {
                    onSuccess:() => {
                        B1ndToast.showSuccess('댓글을 수정했습니다!');
                    },
                    onError:(e) => {
                        B1ndToast.showError('댓글 수정을 하지 못했습니다!');
                        console.log(e);
                    },
                    onSettled:() => {
                        SetCommentEdit(!commentEdit);
                    }
                })
            }
        }
    },[commentEdit,commentEditContent]);

    const onEditKeyPress = useCallback((e:React.KeyboardEvent<HTMLInputElement>)=>{
        if (e.key ==='Enter'){
            e.preventDefault();
            onEditClick();
        }
    },[onEditClick]);

    return { onEditChange, commentEditContent, onEditClick, onEditKeyPress };
}