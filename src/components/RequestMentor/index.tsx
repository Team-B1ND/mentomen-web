import request from "@/public/icons/title/request.png";
import useHideHeaderOrNav from "@/hooks/common/useHideHeaderOrNav";
import * as S from "./style";
import Title from "../Common/Title";
import RequestMentorNavigation from "./RequestMentorNavigation";
import RequestMentorForm from "./RequestMentorForm";
import useTokenCheck from "@/hooks/Auth/useTokenCheck";
import { useRegistPost } from "@/hooks/RequestMentor/useRegistPost";

const RequestMentor = () => {
  useTokenCheck();
  useHideHeaderOrNav("Both");
  const { ...hooks } = useRegistPost();

  return (
    <S.Container>
      <RequestMentorNavigation {...hooks} />
      <S.Content>
        <Title
          titleIcon={request}
          titleText="멘토 요청 글 작성하기"
          subTitleText="태그를 선택하고 글을 작성하여 멘토에게 도움을 받아보세요!"
          customstyle={{ fontSize: "18px" }}
        />
        <RequestMentorForm {...hooks} />
      </S.Content>
    </S.Container>
  );
};

export default RequestMentor;
