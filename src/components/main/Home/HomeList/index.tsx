import * as S from '../style';
import android from '.././.././../.././assets/logo/Android.svg';
import design from '.././.././../.././assets/logo/Design.svg';
import ios from '.././.././../.././assets/logo/Ios.svg';
import server from '.././.././../.././assets/logo/Server.svg';
import web from '.././.././../.././assets/logo/Web1.svg';
import commentBt from '.././.././../.././assets/images/CommentBt.png';
import aprofile from '.././.././../.././assets/images/aprofile.png';
import { useGetList } from '../../../../querys/list/list.query';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';

function HomeList(){
    const navigate = useNavigate();
    const { data:allList } = useGetList(); //모든 게시글 불러오기
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    // console.log(allList);
    return(
        <>
            {
                allList?.data.map((data) => 
                    <S.HomePostLists key={data.postId}>
                        <div style={{display:'flex',justifyContent:"space-between"}}>
                            <S.HomeMiniProfileContainer>
                                <div style={{display:'flex'}}>
                                    <S.HomeMiniProfile src={data?.profileUrl ? data?.profileUrl : aprofile} />
                                    <div style={{display:'flex',flexDirection:'column'}}>
                                        <S.HomeAuthor>{data.userName}</S.HomeAuthor>
                                        <S.HomeClassInfoContainer>
                                            {data.stdInfo.grade}학년 {data.stdInfo.room}반 {data.stdInfo.number}번
                                        </S.HomeClassInfoContainer>
                                    </div>
                                </div>
                            </S.HomeMiniProfileContainer>

                            <S.HomeDevLogo src={
                                data.tag ==='WEB' ? web : data.tag==='SERVER' 
                                ? server : data.tag ==='IOS'
                                ? ios : data.tag ==='DESIGN'
                                ? design : android}  alt='개발분야' 
                            />
                        </div>
                
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <S.HomeContentContainer>{data.content}</S.HomeContentContainer>
                                <div style={{width:'240px',height:'228px',marginRight:'30px',marginTop:'30px'}}>
                                    {data.imgUrls?.length >=1 ? (
                                            <Slider {...settings}>
                                                {data.imgUrls.map((imgs:string,idx)=>{
                                                    return(<S.HomePostImage key={idx} src={imgs} alt='' />);
                                                })}
                                            </Slider>
                                        )
                                        :
                                        (
                                            <S.HomePostImgNone>이미지 없음</S.HomePostImgNone>
                                        )
                                    }
                                </div>
                            </div>
                            <S.HomeComment src={commentBt} alt='코멘트' onClick={()=>navigate(`/detail/${data.postId}`)}/>
                        </div>
                    </S.HomePostLists>)
            }
        </>
    );
}

export default React.memo(HomeList);