import { useParams } from "react-router-dom";
import ProfileBar from "../common/profile";
import KeyWordList from "./keyWordList";
import * as S from './style';

export default function KeyWord(){
    const { keyword } = useParams();
    return(
        <>
            <ProfileBar />
            <S.KeyWordContainer>
                <S.KeyWordWrap>
                    <KeyWordList keyword={keyword!!}/>
                </S.KeyWordWrap>
            </S.KeyWordContainer>
        </>
    );
}