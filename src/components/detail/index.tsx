import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { usePostComment } from "../../querys/comment/comment.query";
import { useGetMyPost } from "../../querys/Posts/posts.query";
import ProfileBar from "../common/Profile";
import * as S from './style';

export default function Detail(){
    const { postId } = useParams();
    const [comment,SetComment] = useState<string>('');

    // const { data } = useGetMyPost({postId:Number(postId)}); //게시글 정보 가져오기
    const commentMutaion = usePostComment();

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
            <ProfileBar/>

            <S.DetailContainer>
                <S.DetailViewContainer>
                    <S.DetailView>

                    </S.DetailView>

                    <form style={{display:'flex',margin:'0 auto',marginTop:'50px'}}>
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
            </S.DetailContainer>
        </div>
    );
}