import * as S from '../style';
import { ParamType } from '../../../types/param/param.type';
import { useDetailCommentWrite } from '../../../hooks/detail/useDetailCommentWrite';
export default function DetailCommentWrite({postId}:ParamType){

    const { onClick, onKeyPress, comment, onChange } = useDetailCommentWrite({postId});

    return(
        <>
            <S.DetailComment
              autoComplete="off"
              value={comment}
              onChange={onChange}
              placeholder="댓글을 입력해주세요"
              onKeyPress={onKeyPress}
            />
            <S.DetailCommentSubmitContainer>
              <S.DetailCommentSubmit onClick={onClick} />
            </S.DetailCommentSubmitContainer>
        </>
    );
}