import * as S from "./style";
import Title from "../../Title";
import phone from "@/public/icons/title/phone.png";
import { QRCODE_ITEMS } from "./constant";

const QRcode = () => {
  return (
    <S.Container>
      <Title
        titleIcon={phone}
        titleText="모바일로 편리하게 사용하기"
        subTitleText="모바일로 다운로드 받아 사용해 보세요!"
      />
      <S.QRCodeBox>
        {QRCODE_ITEMS.map((item) => (
          <S.QRCodeContainer key={item.id}>
            <S.AndroidQRCodeImage src={item.QRcode} alt="AOS" />
            <p>{item.title}</p>
          </S.QRCodeContainer>
        ))}
      </S.QRCodeBox>
    </S.Container>
  );
};

export default QRcode;
