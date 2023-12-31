import { FaRegPaperPlane } from "react-icons/fa";
import { Suspense } from "react";
import { useGetComment } from "../../../queries/Comment/comment.query";
import { ListItemType } from "../../../types/List/list.type";
import ErrorBoundary from "../../Common/ErrorBoundary";
import ListItemProfile from "../../Common/ListItem/ListItemProfile";
import profile from "../../../assets/images/aprofile.png";
import * as S from "./style";
import { StudentInfo } from "../../Common/StudentInfo";
import { useComment } from "../../../hooks/Comment/useComment";
import DetailComentSkeleton from "../../Common/Skeleton/Detail/DetailComent";
import { palette } from "../../../style/palette";

interface Props {
  data: ListItemType;
}

const DetailContent = ({ data }: Props) => {
  const { content, handleCommentChange, handleCommentSubmit } = useComment();
  return (
    <S.Content imgUrls={data.imgUrls}>
      <S.ProfileContainer>
        <ListItemProfile {...data} />
      </S.ProfileContainer>

      <S.Comment>
        <S.CommentBox>
          <li>
            <S.UserProfileWrap>
              <S.UserProfile>
                <img src={data.profileUrl || profile} alt="이미지 없음" />
                <StudentInfo stdInfo={data.stdInfo} userName={data.userName} />
              </S.UserProfile>
            </S.UserProfileWrap>
            <S.UserComment>{data.content}</S.UserComment>
          </li>

          <ErrorBoundary fallback={<>Error:)</>}>
            <Suspense fallback={<DetailComentSkeleton />}>
              <CommentList postId={data.postId} />
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

const CommentList = ({ postId }: { postId: number }) => {
  const { data: comments } = useGetComment(postId, { suspense: true });
  return (
    <>
      {comments?.data.length!! > 0 &&
        comments?.data.map((item) => (
          <li key={item.commentId}>
            <S.UserProfileWrap>
              <S.UserProfile>
                <img src={item.profileUrl || profile} alt="이미지 없음" />
                <StudentInfo stdInfo={item.stdInfo} userName={item.userName} />
              </S.UserProfile>
            </S.UserProfileWrap>
            <S.UserComment>{item.content}</S.UserComment>
          </li>
        ))}
    </>
  );
};

export default DetailContent;
