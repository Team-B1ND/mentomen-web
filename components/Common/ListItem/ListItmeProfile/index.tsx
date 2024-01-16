import { useSetRecoilState } from "recoil";
import { ExistingPostDataAtom } from "@/stores/Post/post.store";
import { ListItemType } from "@/types/List/list.type";
import { StudentInfo } from "../../StudentInfo";
import * as S from "./style";
import getTag from "@/util/Tag/getTag";
import { useRouter } from "next/router";
import EditingDots from "../../Button/EditingDots";

const ListItemProfile = ({ ...attr }: ListItemType) => {
  const setExistingPostData = useSetRecoilState(ExistingPostDataAtom);
  const router = useRouter();
  const { asPath } = router;

  return (
    <S.Profile>
      <S.TagIcon src={getTag.getTagIcon(attr.tag)} alt="" />
      <S.UserInfo>
        <div>
          <StudentInfo stdInfo={attr.stdInfo} userName={attr.userName} />
        </div>

        {asPath === "/mypage" && (
          <EditingDots
            postId={attr.postId}
            onClick={() => setExistingPostData(attr)}
          />
        )}
      </S.UserInfo>
    </S.Profile>
  );
};

export default ListItemProfile;
