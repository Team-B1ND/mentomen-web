import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";

export const SkeletonPostWrap = styled.div`
  overflow-y: scroll;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
  height: 90%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SkeletonPostLists = styled.div`
  width: 912px;
  height: 413px;
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  ${skeletonAnimtaion}
`;

export const SkeletonNoticeWrap = styled.div`
  overflow-y: scroll;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 700px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SkeletonNoitceLists = styled.div`
    width: 900px;
    height: 100px;
    border-radius:10px;
    margin-top: 40px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    margin-left:50px;
    ${skeletonAnimtaion}
`;


export const SkeletonCommentWrap = styled.div`
    overflow-y: scroll;
    height:300px;
    box-sizing: border-box;
    display: flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content: center;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const SkeletonCommentLists = styled.div`
    width: 912px;
    height: 80px;
    margin-top:50px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.175);
    display:flex;
    flex-direction:row;
    ${skeletonAnimtaion}
`;