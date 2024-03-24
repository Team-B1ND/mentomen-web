import { DetailItemContainer } from "@/src/components/Detail/style";
import { Flex } from "@/src/stories/layout";
import { SkeletonBox } from "@/src/stories/ui";
import styled from "styled-components";
import DetailCommentSkeleton from "./DetailComment";

const DetailSkeleton = () => {
  return (
    <DetailItemContainer>
      <Box>
        <SkeletonBox
          width="45px"
          height="45px"
          customStyle={{ borderRadius: "100%" }}
        />

        <ContentWrap>
          <Profile>
            <div>
              <SkeletonBox width="38px" height="15px" />
              <SkeletonBox width="71px" height="12px" />
            </div>
            <SkeletonBox width="77px" height="14px" />
          </Profile>

          <ImageWrap>
            <SkeletonBox width="460px" height="21px" />
            <SkeletonBox width="491px" height="491px" />
          </ImageWrap>

          <InterfactionWrap>
            <SkeletonBox width="26px" height="26px" />
            <SkeletonBox width="26px" height="26px" />
          </InterfactionWrap>
        </ContentWrap>
      </Box>

      <DetailCommentSkeleton />
    </DetailItemContainer>
  );
};

export default DetailSkeleton;

const Box = styled.div`
  width: 100%;

  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 16px;

  ${Flex({ columnGap: "15px" })}
`;

const ContentWrap = styled.div`
  ${Flex({ flexDirection: "column", rowGap: "15px" })}
`;

const Profile = styled.div`
  padding-top: 5px;
  div {
    ${Flex({ columnGap: "5px", alignItems: "flex-end" })}
  }
  ${Flex({ flexDirection: "column", rowGap: "7px" })}
`;

const ImageWrap = styled.div`
  padding-top: 5px;
  ${Flex({ flexDirection: "column", rowGap: "20px" })}
`;

const InterfactionWrap = styled.div`
  ${Flex({ alignItems: "center", columnGap: "5px" })}
`;
