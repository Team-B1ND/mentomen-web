import * as S from "./style";
import phone from "@/public/icons/title/phone.png";
import { QRCODE_ITEMS } from "./constant";
import { Title } from "@/src/stories/ui";

const QRcode = () => {
  return (
    <S.Container>
      <Title
        titleIcon={phone}
        titleText="모바일로 편리하게 사용하기"
        subTitleText="모바일로 멘투멘을 다운로드 받아 사용해 보세요!"
      />
      <S.QRCodeBox>
        {QRCODE_ITEMS.map((item) => (
          <S.QRCodeContainer key={item.id}>
            <S.AndroidQRCodeImage
              src={item.QRcode}
              width={130}
              height={130}
              alt="AOS"
            />
            <p>{item.title}</p>
          </S.QRCodeContainer>
        ))}
      </S.QRCodeBox>
    </S.Container>
  );
};

export default QRcode;
