import aprofile from '../../.././.././../assets/images/aprofile.png';
import * as S from '../style';
import { useHomeContent } from '../../../../../hooks/home/HomeContent/useHomeContent';

export default function HomeContent(){
    
    const { onChange, onKeyDown, text} = useHomeContent();

    return(
        <>
            <S.HomeMentoRequestTextProfile src={aprofile} alt='' />
                <S.HomeMentoRequestTextArea 
                    placeholder='멘토 요청할 내용을 작성하세요'
                    onChange={onChange}
                    value={text}
                    onKeyDown={onKeyDown}
                />
        </>
    );
}