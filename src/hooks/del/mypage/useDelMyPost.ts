import { B1ndToast } from "@b1nd/b1nd-toastify";
import { QueryClient } from "react-query";
import { useDelPost } from "../../../querys/mypage/mypage.query";

export const useDelMyPost = () => {
    const del = useDelPost();
    const queryClient = new QueryClient();

    const onDelete = (postId:number)=>{
        const answer = window.confirm('게시글을 삭제하시겠습니까?');
        if (answer === true){
            del.mutate(
                {
                    postId:postId,
                },
                {
                    onSuccess: () => {
                        B1ndToast.showSuccess('게시글이 삭제되었습니다!');
                        queryClient.invalidateQueries('/post/delete');
                    },
                    onError: (e) => { 
                        B1ndToast.showError('게시글을 삭제하지 못했습니다!');
                        console.log(e); 
                    }
                }
            )
        }
    };
    return {onDelete};
}