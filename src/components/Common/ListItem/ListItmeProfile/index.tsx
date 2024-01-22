import { ListItemType } from "@/src/types/List/list.type";
import * as S from "./style";
import getTag from "@/src/utils/Tag/getTag";
import { useRouter } from "next/router";
import EditingDots from "../../Button/EditingDots";

const ListItemProfile = ({ ...attr }: ListItemType) => {
  const router = useRouter();
  const { asPath } = router;
  const { grade, room, number } = attr.stdInfo;

  return (
    <S.Profile>
      <S.TagIcon src={getTag.getTagIcon(attr.tag)} alt="태그" />

      <S.UserInfo>
        <S.StudentInfoWrap>
          <S.StudentName>{attr.userName}</S.StudentName>
          <S.GradeClassNumber>
            {grade}학년 {room}반 {number}번
          </S.GradeClassNumber>
        </S.StudentInfoWrap>

        {asPath === "/mypage" && <EditingDots listItemData={attr} />}
      </S.UserInfo>
    </S.Profile>
  );
};

export default ListItemProfile;
