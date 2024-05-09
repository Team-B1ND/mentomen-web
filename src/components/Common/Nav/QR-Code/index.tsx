import * as S from "./style";
import phone from "@/public/icons/title/phone.png";
import { QRCODE_ITEMS } from "./constant";
import { Title } from "@/src/stories/ui";
import { Column, Row } from "@/src/stories/layout";

const QRCode = () => {
  return (
    <S.Container>
      <Title
        titleIcon={phone}
        titleText="모바일로 편리하게 사용하기"
        subTitleText="모바일로 멘투멘을 다운로드 받아 사용해 보세요!"
      />

      <S.QRCodeBox>
        {QRCODE_ITEMS.map((item) => (
          <Column key={item.id} $alignItems={"center"}>
            <S.QRCodeImage
              src={item.QRcode}
              onClick={() => window.open(item.link, "_blank")}
              width={130}
              height={130}
              alt={item.title}
            />
            <S.QRCodeTitle>{item.title}</S.QRCodeTitle>
          </Column>
        ))}
      </S.QRCodeBox>
    </S.Container>
  );
};

export default QRCode;
