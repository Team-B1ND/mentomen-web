import * as S from './style';
import HomeTagChoice from './HomeTagChoice';
import HomeContent from './HomeContent';
import HomeImgShow from './HomeImgShow';

export default function HomeMentoRequest(){

    return(
        <div>
            <S.HomeMentoReguestTextContainer>
                <S.HomeMentoReguestText>멘토 요청하기</S.HomeMentoReguestText>
            </S.HomeMentoReguestTextContainer>

            <S.HomeMentoReguestContainer>
                <S.HomeMentoReguestProfileTextAreaContainer>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <div style={{display:'flex',flexDirection:'row'}}>
                            <HomeContent />
                        </div>

                        <div style={{display:'flex',flexDirection:'row', margin:'20px 0 0 53px'}}>
                            <HomeTagChoice />
                        </div>
                    </div>
                </S.HomeMentoReguestProfileTextAreaContainer>

                <S.HomeMentoReguestImgContainer>
                    <HomeImgShow />
                </S.HomeMentoReguestImgContainer>
            </S.HomeMentoReguestContainer>
        </div>
    );
}