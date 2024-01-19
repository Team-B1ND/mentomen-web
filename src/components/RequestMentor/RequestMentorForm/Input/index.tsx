import * as S from "../style";

interface Props {
  handleRequestMentorInputChange: (
    e: React.ChangeEvent<HTMLDivElement>
  ) => void;
}

const RequestMentorFormInput = ({ handleRequestMentorInputChange }: Props) => {
  return (
    <S.ContentInput
      contentEditable={true}
      onInput={handleRequestMentorInputChange}
      placeholder={`글을 작성해 주세요!\n다양한 분야의 멘토가 기다리고 있습니다 :)`}
    ></S.ContentInput>
  );
};

export default RequestMentorFormInput;
