import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useCallback } from "react";
import { QueryClient } from "react-query";
import { useRecoilState } from "recoil";
import { useDelPost } from "../../../queries/MyPage/mypage.query";
import { MyPageModal } from "../../../stores/MyPage/mypageAtom";

export const useDelMyPost = () => {
  const del = useDelPost();
  const queryClient = new QueryClient();
  const [myPageModal, SetMyPageModal] = useRecoilState<boolean>(MyPageModal);

  const onMyPostDelete = useCallback(
    async (postId: number, e?: React.MouseEvent<HTMLDivElement>) => {
      const answer = window.confirm("게시글을 삭제하시겠습니까?");
      if (answer === true) {
        e?.preventDefault();
        del.mutateAsync(
          {
            postId: postId,
          },
          {
            onSuccess: () => {
              SetMyPageModal(false);
              B1ndToast.showSuccess("게시글이 삭제되었습니다!");
              queryClient.invalidateQueries("/post/delete");
            },
            onError: () => {
              B1ndToast.showError("게시글을 삭제하지 못했습니다!");
            },
          }
        );
      }
    },
    [del]
  );
  return { onMyPostDelete };
};
