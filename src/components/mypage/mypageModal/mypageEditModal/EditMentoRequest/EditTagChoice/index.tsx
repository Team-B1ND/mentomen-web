import { useRecoilState } from "recoil";
import { MyPostTag } from "../../../../../../recoil/MyPage/mypageAtom";
import * as S from "../../../../../Main/Home/HomeMentoRequest/style";
import { Dev } from "../../../../../Main/Home/HomeMentoRequest/devlogo";
import { useMyPostEdit } from "../../../../../../hooks/MyPage/useMyPostEdit";
export default function EditTagChoice() {
  const [myPostTag, SetMyPostTag] = useRecoilState<string>(MyPostTag);
  const { onMyPageEditTagChocie } = useMyPostEdit();

  return (
    <>
      {Dev.map((dev) => (
        <div key={dev.name} onClick={() => onMyPageEditTagChocie(dev.name)}>
          <S.HomeMentoRequestTagImg
            src={myPostTag === dev.name ? dev.logo2 : dev.logo}
            alt={dev.name}
          />
        </div>
      ))}
    </>
  );
}
