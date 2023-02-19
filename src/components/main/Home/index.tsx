import { useNavigate } from "react-router-dom";
import useTokenCheck from "../../../hooks/auth/useTokenCheck";
import ProfileBar from "../../common/Profile";
import * as S from './style';
import { Lists } from "./HomeDummy";
import android from '.././../../assets/logo/Android.svg';
import design from '.././../../assets/logo/Design.svg';
import ios from '.././../../assets/logo/Ios.svg';
import server from '.././../../assets/logo/Server.svg';
import web from '.././../../assets/logo/Web1.svg';
import commentBt from '.././../../assets/images/CommentBt.png';
import { useGetAllPosts } from "../../../querys/Posts/posts.query";

const Home = () => {
  const { isAuthority } = useTokenCheck();
  const navigate = useNavigate();
  if (!isAuthority) {
    window.alert("유효한토큰");
    navigate("/start");
  }

  const { data } = useGetAllPosts(); //모든 게시글 불러오기

  return (
    <div>
      <S.HomeContainer>
        <S.HomeWrap>

          <S.HomeMentoReguestContainer>

          </S.HomeMentoReguestContainer>
          
          {
            Lists?.data.map(data => 
              <S.HomePostLists key={data.postId}>
                <div style={{display:'flex',justifyContent:"space-between"}}>
                  <S.HomeMiniProfileContainer>
                  
                    <div style={{display:'flex'}}>
                      <S.HomeMiniProfile src={data.profileUrl} />

                      <div style={{display:'flex',flexDirection:'column'}}>
                        <S.HomeAuthor>{data.userName}</S.HomeAuthor>
                        <S.HomeClassInfoContainer>
                          {data.stdInfo.grade}학년 {data.stdInfo.room}반 {data.stdInfo.number}번
                        </S.HomeClassInfoContainer>
                      </div>
                    </div>

                  </S.HomeMiniProfileContainer>

                  <S.HomeDevLogo src={
                    data.tag ==='Web' ? web : data.tag==='Server' 
                    ? server : data.tag ==='iOS'
                    ? ios : data.tag ==='Design'
                    ? design : android}  alt='개발' 
                  />
                </div>
                
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                  <S.HomeContentContainer>{data.content}</S.HomeContentContainer>
                  <S.HomePostImage src={data.imgUrls[0]} />
                </div>

                <S.HomeComment src={commentBt} alt='코멘트' onClick={()=>navigate(`/detail/${data.postId}`)}/>
              </S.HomePostLists>)
          }
        </S.HomeWrap>
      </S.HomeContainer>
    </div>
  );
};

export default Home;
