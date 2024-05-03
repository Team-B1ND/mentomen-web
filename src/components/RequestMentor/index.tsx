import request from "@/public/icons/title/request.png";
import RequestMentorNavigation from "./RequestMentorNavigation";
import RequestMentorForm from "./RequestMentorForm";
import { Title } from "@/src/stories/ui";
import { useTokenCheck } from "@/src/hooks/Auth";
import { useRegistPost } from "@/src/hooks/RequestMentor";
import { Column } from "@/src/stories/layout";
import { css } from "styled-components";

const RequestMentor = ({ type }: { type: "WRITE" | "MODIFY" }) => {
  useTokenCheck();
  const { ...hooks } = useRegistPost(type);

  return (
    <Column
      $width={"800px"}
      $height={"100vh"}
      $alignItems={"center"}
      $backgroundColor={"#fff"}
      $padding={"0 0 2rem 0"}
      $customStyle={css`
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
      `}
    >
      <RequestMentorNavigation {...hooks} />

      <Column
        $width={"80%"}
        $padding={"40px 0 0 0"}
        $customStyle={css`
          height: calc(100% - 60px);
          overflow: auto;
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        <Title
          titleIcon={request}
          titleText={
            type === "MODIFY"
              ? "멘토 요청 글 수정하기"
              : "멘토 요청 글 작성하기"
          }
          subTitleText={
            type === "MODIFY"
              ? "태그나 글 또는 이미지를 수정하여 다시 멘토에게 도움을 요청하세요!"
              : "태그를 선택하고 글을 작성하여 멘토에게 도움을 받아보세요!"
          }
          customstyle={{ fontSize: "18px" }}
        />
        <RequestMentorForm {...hooks} />
      </Column>
    </Column>
  );
};

export default RequestMentor;
