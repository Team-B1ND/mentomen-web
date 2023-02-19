import * as S from './style';
import { useGetPost } from "../../../querys/Posts/posts.query";
import { ParamType } from "../../../types/param/param.type";
import aprofile from '.././../.././assets/images/aprofile.png';
import android from '.././../.././assets/logo/Android.svg';
import design from '.././../.././assets/logo/Design.svg';
import ios from '.././../.././assets/logo/IOS.svg';
import server from '.././../.././assets/logo/Server.svg';
import web from '.././../.././assets/logo/Web1.svg';


export default function DetailViewMore({postId}:ParamType){
    
    //const { data: getpost } = useGetPost({postId:postId}); //게시글 정보 가져오기

    return(
        <div>
            <S.DetailViewProfileDevLogoContainer>
                <S.DetailViewProfileContainer>
                    <S.DetailViewProfileImg src={aprofile}/>
                    <div style={{display:'flex',flexDirection:'column',marginTop:'13px'}}>
                        <S.DetailViewProfileName>백승하</S.DetailViewProfileName>
                        <S.DetailViewClassInfo>1학년 3반 ?번</S.DetailViewClassInfo>
                    </div>
                </S.DetailViewProfileContainer>

                <S.DetailViewDevLogo src={
                    // getpost.tag ==='Web' ? web : getpost.tag==='Server' 
                    // ? server : getpost.tag ==='iOS'
                    // ? ios : getpost.tag ==='Design'
                    // ? design : android}  alt='개발' 
                    design
                } />
            </S.DetailViewProfileDevLogoContainer>

            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'30px'}}>
                <S.DetailViewContentContainer>
                    살려주세요 지금 새벽 2시 17분인데 잠도 못자고 디자인하고 있어요 분명 디자인은 내가 아니라 윤종이였던 것 같은데 왜 내가 하고 있을까요?,살려주세요 지금 새벽 2시 17분인데 잠도 못자고 디자인하고 있어요 분명 디자인은 내가 아니라 윤종이였던 것 같은데 왜 내가 하고 있을까요?,살려주세요 지금 새벽 2시 17분인데 잠도 못자고 디자인하고 있어요 분명 디자인은 내가 아니라 윤종이였던 것 같은데 왜 내가 하고 있을까요?,살려주세요 지금 새벽 2시 17분인데 잠도 못자고 디자인하고 있어요 분명 디자인은 내가 아니라 윤종이였던 것 같은데 왜 내가 하고 있을까요?살려주세요 지금 새벽 2시 17분인데 잠도 못자고 디자인하고 있어요 분명 디자인은 내가 아니라 윤종이였던 것 같은데 왜 내가 하고 있을까요?
                </S.DetailViewContentContainer>
                
                <S.DetailViewImg />
            </div>
        </div>
    );
}