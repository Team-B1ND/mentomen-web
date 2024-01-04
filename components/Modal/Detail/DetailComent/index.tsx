import { FaRegPaperPlane } from "react-icons/fa";
import { Suspense } from "react";
import { ListItemType } from "@/types/List/list.type";
import ErrorBoundary from "../../../Common/ErrorBoundary";
import ListItemProfile from "../../../Common/ListItem/ListItemProfile";
import profile from "@/public/icons/user/aprofile.png";
import * as S from "./style";
import { StudentInfo } from "../../../Common/StudentInfo";
import { useComment } from "@/hooks/Comment/useComment";
import DetailComentSkeleton from "../../../Common/Skeleton/Detail/DetailComent";
import { palette } from "@/style/palette";
import DetailCommentList from "./DetailComentList";
import Image from "next/image";

interface Props {
  data: ListItemType;
}

const DetailComent = ({ data }: Props) => {
  const { content, handleCommentChange, handleCommentSubmit } = useComment();
  return (
    <S.Content imgurls={data.imgUrls}>
      <S.ProfileContainer>
        <ListItemProfile {...data} />
      </S.ProfileContainer>

      <S.Comment>
        <S.CommentBox>
          <li>
            <S.UserProfileWrap>
              <S.UserProfile>
                <Image
                  src={data.profileUrl || profile}
                  style={S.ProfileImage}
                  width={35}
                  height={35}
                  alt=""
                />
                <StudentInfo stdInfo={data.stdInfo} userName={data.userName} />
              </S.UserProfile>
            </S.UserProfileWrap>
            <S.CommentText>{data.content}</S.CommentText>
          </li>

          <ErrorBoundary fallback={<>Error:)</>}>
            <Suspense fallback={<DetailComentSkeleton />}>
              <DetailCommentList postId={data.postId} />
            </Suspense>
          </ErrorBoundary>
        </S.CommentBox>
      </S.Comment>

      <S.InputCommentForm onSubmit={(e) => handleCommentSubmit(e, data.postId)}>
        <input
          value={content}
          autoComplete="off"
          placeholder="댓글달기..."
          onChange={handleCommentChange}
        />
        <button type="submit">
          <FaRegPaperPlane size={20} color={palette.color} />
        </button>
      </S.InputCommentForm>
    </S.Content>
  );
};

export default DetailComent;
