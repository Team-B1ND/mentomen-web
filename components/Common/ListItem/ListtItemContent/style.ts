import flex from "@/style/flex";
import { AiOutlineComment } from "react-icons/ai";
import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: auto;
  margin-top: 6px;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 1px;

  white-space: pre-wrap;
  line-height: 21px;
  font-size: 15px;

  color: #858585;
`;

export const EtcContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10px;
  padding-right: 5px;
  ${flex({ alignItems: "center", justifyContent: "space-between" })}
`;

export const CommentIcon = styled(AiOutlineComment)`
  width: 30px;
  height: 30px;

  cursor: pointer;
  transition: all 0.13s ease-out;
  transform: scale(1);
  border-radius: 5px;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    transform: scale(0.95);
    color: #737373;
  }
`;

export const UploadDateTime = styled.p`
  color: #858585;
  font-size: 14px;
`;
