import { ListItemType } from "@/src/types/List/list.type";
import profile from "@/public/icons/user/aprofile.png";
import * as S from "./style";
import EditingDots from "@/src/components/Common/Button/EditingDots";
import { GetDateTime } from "@/src/util/Date/getDateTime";
import { useRecoilValue } from "recoil";
import { UserDataAtom } from "@/src/stores/User/user.store";

const DetailProfile = ({ ...attr }: ListItemType) => {
  const { grade, room, number } = attr.stdInfo;
  const userData = useRecoilValue(UserDataAtom);
  const getDate = new GetDateTime();
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
              {getDate.uploadTimeAgo(new Date(attr.updateDateTime))}
              {updatePostStatus === "UPDATE" && " (수정됨)"}
            </S.UploadPostTime>
          </div>
          <S.ClassInfo>
            {grade}학년 {room}반 {number}번
          </S.ClassInfo>
        </S.PosterInfo>
      </S.ProfileBox>

      {userData?.userId === attr.author && (
        <EditingDots
          customStyle={S.DotsStyle}
          listItemData={attr}
        />
      )}
    </S.Container>
  );
};

export default DetailProfile;
