import { Suspense } from "react";
import { useGetComment } from "../../../queries/Comment/comment.query";
import { ListItemType, StdInfoType } from "../../../types/List/list.type";
import ErrorBoundary from "../../Common/ErrorBoundary";
import ListItemProfile from "../../Common/ListItem/ListItemProfile";
import profile from "../../../assets/images/aprofile.png";
import * as S from "./style";
import { StudentInfo } from "../../Common/StudentInfo";
import { useComment } from "../../../hooks/Comment/useComment";

interface DetailContentProps {
  data: ListItemType;
}

interface CommentListProps {
  postId: number;
}

const DetailContent = ({ data }: DetailContentProps) => {
  const { content, handleCommentChange, handleCommentSubmit } = useComment();
  return (
    <S.Content>
      <ListItemProfile {...data} />

      <S.Comment>
        <S.CommentBox>
          <li>
            <S.CommentUserProfile>
              <img src={data.profileUrl || profile} alt="이미지 없음" />
              <StudentInfo stdInfo={data.stdInfo} userName={data.userName} />
            </S.CommentUserProfile>
            <S.UserComment>{data.content}</S.UserComment>
          </li>

          <ErrorBoundary fallback={<>Error:)</>}>
            <Suspense fallback={<>로딩 중...</>}>
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
        <button type="submit">등록</button>
      </S.InputCommentForm>
    </S.Content>
  );
};

const CommentList = ({ postId }: CommentListProps) => {
  const { data: comments } = useGetComment(postId, { suspense: true });
  return (
    <>
      {comments?.data.length!! > 0 &&
        comments?.data.map((item) => (
          <li key={item.commentId}>
            <S.CommentUserProfile>
              <img src={item.profileUrl || profile} alt="이미지 없음" />
              <StudentInfo stdInfo={item.stdInfo} userName={item.userName} />
            </S.CommentUserProfile>
            <S.UserComment>{item.content}</S.UserComment>
          </li>
        ))}
    </>
  );
};

export default DetailContent;
