import { Flex } from "@/src/stories/layout";
import { skeletonAnimation, SkeletonBox } from "@/src/stories/ui";
import styled, { css } from "styled-components";

const ListItemSkeleton = () => {
  return (
    <>
      {Array.from({ length: 15 }).map((_, idx) => (
        <Box key={idx}>
          <ProfileWrap>
            <TagSkeleton />
            <div>
              <SkeletonBox width="45px" height="16px" />
              <SkeletonBox width="75px" height="13px" />
            </div>
          </ProfileWrap>

          <ContentWrap>
            <SkeletonBox width="400px" height="22px" />
            <SkeletonBox width="100%" height="420px" />
          </ContentWrap>

          <InteractionWrap>
            <div>
              <SkeletonBox width="26px" height="26px" />
              <SkeletonBox width="26px" height="26px" />
              <SkeletonBox width="26px" height="26px" />
            </div>

            <SkeletonBox width="55px" height="16px" />
          </InteractionWrap>
        </Box>
      ))}
    </>
  );
};

export default ListItemSkeleton;

const Box = styled.div`
  width: 100%;
  height: auto;

  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 0 13px 10px;

  ${Flex({
    flexDirection: "column",
    rowGap: "10px",
  })}
`;

const ProfileWrap = styled.div`
  div {
    padding-top: 6px;
    ${Flex({
      flexDirection: "column",
      rowGap: "4px",
    })}
  }
  ${Flex({
    columnGap: "12px",
  })}
`;

const TagSkeleton = styled.div`
  width: 28px;
  height: 43px;
  clip-path: polygon(50% 0%, 0% 0%, 0% 94%, 50% 78%, 100% 94%, 100% 0%);
  ${skeletonAnimation}
`;

const ContentWrap = styled.div`
  ${Flex({
    flexDirection: "column",
    rowGap: "8px",
  })}
`;

const InteractionWrap = styled.div`
  div {
    ${Flex({
      alignItems: "center",
      columnGap: "5px",
    })}
  }

  ${Flex({
    alignItems: "center",
    justifyContent: "space-between",
  })}
`;
