import { useRecoilState } from "recoil";
import { MyPostTag } from "../../../../../../recoil/mypage/mypageAtom";
import * as S from "../../../../../main/Home/HomeMentoRequest/style";
import { Dev } from "../../../../../main/Home/HomeMentoRequest/devlogo";
import { useMyPostEdit } from "../../../../../../hooks/mypage/useMyPostEdit";
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
