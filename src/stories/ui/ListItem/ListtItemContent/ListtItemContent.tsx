import { Flex } from "@/src/stories/layout";
import { GetDateTime } from "@/src/stories/utils";
import styled from "styled-components";
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

      <EtcContainer>
        <IconContainer>
          <LikeInteraction postId={attr.postId} />
          <CommentInteraction postId={attr.postId} />
          <ShareInteraction postId={attr.postId} />
        </IconContainer>

        <UploadDateTime>
          {getDateTime.uploadTimeAgo(new Date(attr.updateDateTime))}
        </UploadDateTime>
      </EtcContainer>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  width: 100%;
  margin-top: 6px;
`;

const EtcContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  padding-right: 5px;
  ${Flex({ alignItems: "center", justifyContent: "space-between" })}
`;

const IconContainer = styled.div`
  ${Flex({ alignItems: "center", columnGap: "5px" })}
`;

const UploadDateTime = styled.p`
  color: #858585;
  font-size: 14px;
`;
