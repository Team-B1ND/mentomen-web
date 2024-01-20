import { GetDateTime } from "@/util/Date/getDateTime";
import * as S from "./style";
import ShowMoreContent from "../../ShowMoreContent";
import ListItemContentImage from "./ListItemContentImage";
import CommentInteraction from "../../PostInteraction/CommentInteraction";
import LikeInteraction from "../../PostInteraction/LikeInteraction";
import ShareInteraction from "../../PostInteraction/ShareInteraction";

interface Props {
  updateDateTime: string;
  content: string;
  postId: number;
  imgUrls: string[];
  tag: string;
}

const ListItemContent = ({ ...attr }: Props) => {
  const getDateTime = new GetDateTime();
  return (
    <S.ContentContainer>
      <ShowMoreContent content={attr.content} maxHeight={72} />

      {attr.imgUrls?.length > 0 && (
        <ListItemContentImage imgUrls={attr.imgUrls} />
      )}

      <S.EtcContainer>
        <S.IconContainer>
          <LikeInteraction postId={attr.postId} />
          <CommentInteraction postId={attr.postId} />
          <ShareInteraction postId={attr.postId} />
        </S.IconContainer>

        <S.UploadDateTime>
          {getDateTime.uploadTimeAgo(new Date(attr.updateDateTime))}
        </S.UploadDateTime>
      </S.EtcContainer>
    </S.ContentContainer>
  );
};

export default ListItemContent;
