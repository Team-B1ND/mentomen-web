import { ListItemType } from "@/types/List/list.type";
import profile from "@/public/icons/user/aprofile.png";
import * as S from "./style";
import EditingDots from "@/components/Common/Button/EditingDots";
import { GetDateTime } from "@/util/Date/getDateTime";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ExistingPostDataAtom } from "@/stores/Post/post.store";
import { UserDataAtom } from "@/stores/User/user.store";

const DetailProfile = ({ ...attr }: ListItemType) => {
  const { grade, room, number } = attr.stdInfo;
  const setExistingPostData = useSetRecoilState(ExistingPostDataAtom);
  const userData = useRecoilValue(UserDataAtom);
  const getDate = new GetDateTime(new Date(attr.updateDateTime));
  const updatePostStatus = attr.updateStatus;

  return (
    <S.Container>
      <S.ProfileBox>
        <S.ProfileImage
          src={attr.profileUrl || profile}
          width={45}
          height={45}
          alt="프로필"
        />

        <S.PosterInfo>
          <div>
            <S.PosterName>{attr.userName}</S.PosterName>
            <S.UploadPostTime>
              {getDate.uploadTimeAgo()}
              {updatePostStatus === "UPDATE" && "(수정됨)"}
            </S.UploadPostTime>
          </div>
          <S.ClassInfo>
            {grade}학년 {room}반 {number}번
          </S.ClassInfo>
        </S.PosterInfo>
      </S.ProfileBox>

      {userData?.userId === attr.author && (
        <EditingDots
          postId={attr.postId}
          customStyle={S.DotsStyle}
          onClick={() => setExistingPostData(attr)}
        />
      )}
    </S.Container>
  );
};

export default DetailProfile;
