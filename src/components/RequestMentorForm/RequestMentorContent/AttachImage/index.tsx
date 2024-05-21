import upload from "@/public/icons/RequestMentor/upload.svg";
import cancel from "@/public/icons/RequestMentor/cancel.svg";
import type { Dispatch, RefObject, SetStateAction } from "react";
import { useState } from "react";
import * as S from "../style";
import { Column, Portal } from "@/src/stories/layout";
import dynamic from "next/dynamic";
const ReadMoreImage = dynamic(
  () => import("@/src/components/Common/Image/ReadMoreImage"),
  { ssr: false }
);

interface Props {
  imgUrl: string[];
  setImgUrl: Dispatch<SetStateAction<string[]>>;
  selectFileImage: RefObject<HTMLInputElement>;
  isRequestImage: boolean;

  handleFileUploadClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileUploadDrop: (e: React.DragEvent<HTMLDivElement>) => void;
}

const RequestMentorFormAttachImage = ({ ...hooks }: Props) => {
  const [isDrop, setIsDrop] = useState(false);
  const [isActiveDetailImage, setIsActiveDetailImage] = useState(false);
  const [selectImage, setSelectedImage] = useState("");

  return (
    <>
      <Column $width={"100%"} $rowGap={"15px"}>
        <S.AttachImageWrap
          $isDrop={isDrop}
          $isRequestImage={hooks.isRequestImage}
          onClick={() =>
            !hooks.isRequestImage && hooks.selectFileImage.current?.click()
          }
          onDrop={(e) => {
            hooks.handleFileUploadDrop(e);
            setIsDrop(false);
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDrop(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setIsDrop(false);
          }}
        >
          <input
            type="file"
            onChange={hooks.handleFileUploadClick}
            ref={hooks.selectFileImage}
            multiple
            accept=".jpeg, .jpg, .png"
          />
          <button>
            <S.UploadIcon src={upload} alt="업로드" />
            <p>이미지 선택</p>
          </button>
          <S.AttachImageText>
            {hooks.isRequestImage ? (
              "로딩 중..."
            ) : (
              <>
                또는 해당 박스 안에 <span>10MB 이하</span>의 이미지들(.jpeg,
                .jpg, .png)을 드래그 하세요!
              </>
            )}
          </S.AttachImageText>
        </S.AttachImageWrap>

        {hooks.imgUrl?.length > 0 && (
          <S.PreviewAttachImageBox>
            {hooks.imgUrl.map((item, idx) => (
              <S.PreviewImageWrap key={idx}>
                <S.CancelPreviewImage
                  onClick={() =>
                    hooks.setImgUrl((prev) =>
                      prev.filter((img) => img !== item)
                    )
                  }
                >
                  <S.CancelIcon src={cancel} alt="취소" />
                </S.CancelPreviewImage>
                <S.PreviewImage
                  src={item}
                  width={205}
                  height={140}
                  onClick={() => {
                    setSelectedImage(item);
                    setIsActiveDetailImage(true);
                  }}
                  title="클릭하여 자세히 보기"
                  alt="미리보기"
                />
              </S.PreviewImageWrap>
            ))}
          </S.PreviewAttachImageBox>
        )}
      </Column>

      {isActiveDetailImage && (
        <Portal>
          <ReadMoreImage
            imgUrl={selectImage}
            setIsActiveDetailImage={setIsActiveDetailImage}
          />
        </Portal>
      )}
    </>
  );
};

export default RequestMentorFormAttachImage;
