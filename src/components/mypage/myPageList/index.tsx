import android from '../../../assets/logo/Android.svg';
import design from '../../../assets/logo/Design.svg';
import ios from '../../../assets/logo/Ios.svg';
import server from '../../../assets/logo/Server.svg';
import web from '../../../assets/logo/Web1.svg';
import commentBt from '../../..//assets/images/CommentBt.png';
import aprofile from '../../../assets/images/aprofile.png';
import * as S from '../style';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ListItem } from "../../../types/list/list.type";
import React from 'react';
import { useDelMyPost } from '../../../hooks/del/mypage/useDelMyPost';
import { useMyPost } from '../../../querys/user/user.query';

function MyPageList(){
    const navigate = useNavigate();
    const { data: MyPost } = useMyPost({suspense:true});
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const { onDelete } = useDelMyPost();

    return(
        <>
            {
                MyPost?.data.length !==0 ? (
                MyPost?.data.map((data:ListItem) => 
                    <S.MyPagePostLists key={data.postId}>
                        <div style={{display:'flex',justifyContent:"space-between"}}>
                            <S.MyPageMiniProfileContainer>
                                <div style={{display:'flex'}}>
                                    <S.MyPageMiniProfile src={data?.profileUrl ? data?.profileUrl : aprofile} />
                                        <div style={{display:'flex',flexDirection:'column'}}>
                                            <S.MyPageAuthor>{data.userName}</S.MyPageAuthor>
                                            <S.MyPageClassInfoContainer>
                                                {data.stdInfo.grade}학년 {data.stdInfo.room}반 {data.stdInfo.number}번
                                            </S.MyPageClassInfoContainer>
                                        </div>
                                </div>
                            </S.MyPageMiniProfileContainer>

                            <S.MyPageDevLogo src={
                                data.tag ==='WEB' ? web : data.tag==='SERVER' 
                                ? server : data.tag ==='IOS'
                                ? ios : data.tag ==='DESIGN'
                                ? design : android}  alt='개발분야' 
                            />
                        </div>
                
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <S.MyPageContentContainer>{data.content}</S.MyPageContentContainer>
                                    <div style={{width:'240px',height:'228px',marginRight:'30px',marginTop:'30px'}}>
                                        {data.imgUrls?.length >=1 ? (
                                            <Slider {...settings}>
                                                {data.imgUrls.map((imgs:string,idx:any)=>{
                                                    return(<S.MyPagePostImage key={idx} src={imgs} alt='' />);
                                                })}
                                            </Slider>
                                        )
                                        :
                                        (
                                            <S.MyPagePostImgNone>이미지 없음</S.MyPagePostImgNone>
                                        )
                                        }
                                    </div>
                            </div>
                            
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <S.MyPageComment src={commentBt} alt='코멘트' onClick={()=>navigate(`/detail/${data.postId}`)}/>
                                <S.MyPageDeleteBtn onClick={() => onDelete(Number(data.postId))}/>
                            </div>
                        </div>
                     </S.MyPagePostLists>)
            ):(<div style={{fontSize:'25px'}}>내 게시글이 없습니다</div>)}
        </>
    );
}

export default React.memo(MyPageList);