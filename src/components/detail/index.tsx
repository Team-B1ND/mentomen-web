import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetComment, usePostComment } from "../../querys/comment/comment.query";
import DetailViewMore from "./detailViewMore";
import aprofile from '.././../assets/images/aprofile.png';
import ProfileBar from "../common/Profile";
import * as S from './style';

export default function Detail(){
    const { postId } = useParams();
    const [comment,SetComment] = useState<string>('');

    const commentMutaion = usePostComment(); //댓글 등록하기
    //const { data: getcomment } = useGetComment({postId:Number(postId)}); //댓글 불러오기

    const onChange = useCallback((e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        SetComment(e.target.value);
    },[]);

    const onClick = useCallback(()=>{
        if(comment !==''){
            commentMutaion.mutate({
                content: comment,
                postId: Number(postId),
            },
            {
                onSuccess: () => {
                    window.alert('댓글이 작성되었습니다!');
                    SetComment('');
                },
                onError : (err:any) =>{
                    console.log(err);
                    window.alert('댓글을 작성하지 못했습니다!');
                },
            })
        }
        else window.alert('댓글을 작성해주세요!');
    },[comment]);

    return(
        <div>
            <S.DetailContainer>
                <S.DetailViewContainer>
                    <S.DetailView>
                        <DetailViewMore postId={Number(postId)}/>
                    </S.DetailView>

                    <form style={{display:'flex',margin:'0 auto',marginTop:'70px',marginBottom:'20px'}}>
                        <S.DetailComment                             
                            autoComplete="off" 
                            value={comment} 
                            onChange={onChange}
                            placeholder='댓글을 입력해주세요'
                        />
                        <S.DetailCommentSubmitContainer>
                            <S.DetailCommentSubmit onClick={onClick}/>
                        </S.DetailCommentSubmitContainer>
                    </form>
                </S.DetailViewContainer>

                <S.DetailCommentsWrap>
                    {
                        Array.from({length: 3}).map((item,idx) => 
                            <div key={idx} style={{display:'flex',flexDirection:"column-reverse"}}>
                                <S.DetailCommentsContainer>

                                    <S.DetailCommentProfileContainer>
                                        <S.DetailCommentProfileImg src={aprofile}/>
                                        <S.DetailCommentProfileName>박상현</S.DetailCommentProfileName>
                                    </S.DetailCommentProfileContainer>

                                    <S.DetailCommentAnswer>
                                        안녕하세요 제가 도와드리겠습니다. 
                                        이건 요렇게 하면되고 이것도 저렇게 하시면 실행될 거에요!
                                    </S.DetailCommentAnswer>
                                </S.DetailCommentsContainer>
                            </div>
                        )
                    }
                </S.DetailCommentsWrap>
            </S.DetailContainer>
        </div>
    );
}