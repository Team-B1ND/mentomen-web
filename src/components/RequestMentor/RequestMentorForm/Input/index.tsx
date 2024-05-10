import { PostSubmitType } from "@/src/stories/core";
import { useClipboardPaste } from "@/src/hooks/ClipboardPaste";
import { useRouter } from "next/router";
import * as S from "../style";

interface Props {
  existingData: PostSubmitType | null;
  handleRequestMentorInputChange: (
    e: React.ChangeEvent<HTMLDivElement>
  ) => void;
}

const RequestMentorFormInput = ({
  existingData,
  handleRequestMentorInputChange,
}: Props) => {
  const router = useRouter();
  const { handlePasteFromClipboard } = useClipboardPaste();

  return (
    <S.ContentInputContainer>
      <S.ContentInput
        contentEditable={true}
        onInput={handleRequestMentorInputChange}
        $placeholder={`글을 작성해 주세요!\n다양한 분야의 멘토가 기다리고 있습니다 :)`}
        onPaste={handlePasteFromClipboard}
        suppressContentEditableWarning
      >
        {router.pathname === "/request-mentor/modify" && existingData?.content}
      </S.ContentInput>
    </S.ContentInputContainer>
  );
};

export default RequestMentorFormInput;
