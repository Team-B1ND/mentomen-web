import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 95%;
`;

export const PostArticle = styled.article`
  width: 100%;
  min-height: 130px;

  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 16px 16px 10px 16px;

  background-color: #fff;
  display: flex;
`;

export const ProfileImage = styled(Image)`
  width: 45px;
  height: 45px;
  border-radius: 4rem;
  border: 1px solid #ddd;
`;

export const InteractionStyle = {
  width: "23px",
  height: "23px",
};
