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



const Home = () => {
  const { isAuthority } = useTokenCheck();
  const navigate = useNavigate();
  if (!isAuthority) {
    window.alert("유효한토큰");
    navigate("/start");
  }

  return (
    <div>
      <ProfileBar />

      <S.HomeContainer>
        <S.HomeWrap>
          {
            Lists?.data?.map(data => 
              <S.HomePostLists key={data.postId}>
                <S.HomeMiniProfileContainer>
                  
                  <div style={{display:'flex'}}>
                    <S.HomeMiniProfile src={data.profileUrl} />
                    <S.HomeAuthor>{data.userName}</S.HomeAuthor>
                  </div>

                  <S.HomeClassInfoContainer>
                    {data.stdInfo.grade}학년 {data.stdInfo.room}반 {data.stdInfo.number}번
                  </S.HomeClassInfoContainer>

                </S.HomeMiniProfileContainer>

                <S.HomeContentContainer>
                  {data.content}
                </S.HomeContentContainer>

                <S.HomeDevLogo src={
                  data.tag ==='Web' ? web : data.tag==='Server' 
                  ? server : data.tag ==='iOS'
                  ? ios : data.tag ==='Design'
                  ? design : android}  alt='개발' />

                <S.HomePostImage src={data.imgUrls[0]} />

                <S.HomeComment src={commentBt} alt='코멘트'/>
              </S.HomePostLists>)
          }
        </S.HomeWrap>
      </S.HomeContainer>
    </div>
  );
};

export default Home;
