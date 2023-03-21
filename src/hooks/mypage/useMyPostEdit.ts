import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useCallback } from "react";
import { QueryClient } from "react-query";
import { useRecoilState } from "recoil";
import { customAxios } from "../../lib/axios/customAxios";
import { usePatchMyPost } from "../../querys/list/list.query";
import { ContentPrev } from "../../recoil/detail/DetailAtom";
import {
    MypageEditModal,
  MyPageModal,
  MyPagePostId,
  MyPostContent,
  MyPostImg,
  MyPostTag,
  TagPrev,
} from "../../recoil/mypage/mypageAtom";
import { ListPatchItem } from "../../types/list/list.type";

export function useMyPostEdit() {
  const [myPostContent, SetMyPostContent] =
    useRecoilState<string>(MyPostContent);
  const [myPostTag, SetMyPostTag] = useRecoilState<string>(MyPostTag);
  const [myPostImg, SetMyPostImg] = useRecoilState<string[]>(MyPostImg);
  const [contentPrev, SetContentPrev] = useRecoilState<string>(ContentPrev);
  const [tagPev, SetTagPev] = useRecoilState<string>(TagPrev);
  const [myPagePostId, SetMyPagePostId] = useRecoilState<number>(MyPagePostId);
  const [myPageEditModal, SetMyPageEditModal] =
    useRecoilState<boolean>(MypageEditModal);
    const [myPageModal, SetMyPageModal] = useRecoilState<boolean>(MyPageModal);

  const queryClient = new QueryClient();
  const patchPost = usePatchMyPost();

  const onMyPageEditChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      SetMyPostContent(e.target.value);
    },
    []
  );

  const onPatch = useCallback(
    async (arr: string[], e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      const answer = window.confirm("글을 수정하시겠습니까?");
      if (answer === true) {
        e.preventDefault();
        const data: ListPatchItem = {
          content: myPostContent,
          imgUrls: arr,
          postId: myPagePostId,
          tag: myPostTag,
        };
        patchPost.mutateAsync(data, {
          onSuccess: () => {
            SetMyPageEditModal(false);
            SetMyPageModal(false);
            B1ndToast.showSuccess("글이 수정되었습니다!");
            queryClient.invalidateQueries("post/update");
          },
          onError: () => {
            B1ndToast.showError("글을 수정하지 못했습니다!");
          },
          onSettled: () => {
            SetMyPostImg([]);
          }
        });
      }
    },
    [myPagePostId, myPostContent, myPostTag]
  );

  const onMyPageEditTagChocie = useCallback((devName: string) => {
    SetMyPostTag(devName);
  }, []);

  const onMyPageEditKeyPress = useCallback(
    async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter") {
        if ((myPostContent !== "" && myPostContent !== contentPrev) || myPostTag !== tagPev || myPostImg.length >=1) {
          const arr: string[] = [];
          const formData = new FormData();
          try {
            if (myPostImg.length !== 0) {
              for (let i = 0; i < myPostImg.length; i++) {
                formData.append("file", myPostImg[i]);
              }
              const { data } = await customAxios.post("/file/upload", formData);
              data.data.forEach((value: string) => {
                arr.push(value);
              });
            }
            onPatch(arr, e);
          } catch (err) {
            console.log(err);
          }
        } else B1ndToast.showInfo("제대로 입력해주세요!");
      }
    },
    [contentPrev, myPostContent, myPostTag, tagPev, myPostImg,onPatch]
  );
  return {
    myPostContent,
    onMyPageEditChange,
    onMyPageEditTagChocie,
    onMyPageEditKeyPress,
  };
}
