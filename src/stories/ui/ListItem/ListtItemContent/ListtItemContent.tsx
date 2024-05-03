import { Row } from "@/src/stories/layout";
import { GetDateTime } from "@/src/stories/utils";
import styled, { css } from "styled-components";
import {
  CommentInteraction,
  LikeInteraction,
  ShareInteraction,
} from "../../PostInteraction";
import { ShowMoreContent } from "../../ShowMoreContent";
import { ListItemContentImage } from "./ListItemContentImage";

interface Props {
  updateDateTime: string;
  content: string;
  postId: number;
  imgUrls: string[];
  tag: string;
}

export const ListItemContent = ({ ...attr }: Props) => {
  const getDateTime = new GetDateTime();
  return (
    <ContentContainer>
      <ShowMoreContent content={attr.content} maxHeight={55} />

      {attr.imgUrls?.length > 0 && (
        <ListItemContentImage imgUrls={attr.imgUrls} />
      )}

      <Row
        $width={"100%"}
        $padding={"0 5px 0 0"}
        $alignItems={"center"}
        $justifyContent={"space-between"}
        $customStyle={css`
          margin-top: 10px;
        `}
      >
        <Row $alignItems={"center"} $columnGap={"5px"}>
          <LikeInteraction postId={attr.postId} />
          <CommentInteraction postId={attr.postId} />
          <ShareInteraction postId={attr.postId} />
        </Row>

        <UploadDateTime>
          {getDateTime.uploadTimeAgo(new Date(attr.updateDateTime))}
        </UploadDateTime>
      </Row>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  width: 100%;
  margin-top: 6px;
`;

const UploadDateTime = styled.p`
  color: #858585;
  font-size: 14px;
`;
