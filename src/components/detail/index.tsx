import { useCloseModal } from "@stubee2/stubee2-rolling-util";
import { Dispatch, SetStateAction } from "react";
import { useGetApost } from "../../queries/Post/post.query";
import { turnOffModal } from "../../util/Modal/turnOffOnModal";
import * as S from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ItemImage, NoneImage } from "../Common/ListItem/style";

interface Props {
  postId: number;
  setIsClickCommentIcon: Dispatch<SetStateAction<boolean>>;
}

const Detail = ({ postId, setIsClickCommentIcon }: Props) => {
  const { data: detailPost } = useGetApost({ postId });

  useCloseModal(setIsClickCommentIcon);
  return (
    <S.Container onClick={() => turnOffModal(setIsClickCommentIcon)}>
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <S.ImageContainer>
          {detailPost?.data.imgUrls?.length!! > 0 ? (
            <Carousel showStatus={false} showThumbs={false}>
              {detailPost?.data.imgUrls.map((img, idx) => {
                return <ItemImage key={idx} src={img} alt="이미지 없음" />;
              })}
            </Carousel>
          ) : (
            <NoneImage>이미지가 없습니다.</NoneImage>
          )}
        </S.ImageContainer>
        <S.Content>
          
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export default Detail;
