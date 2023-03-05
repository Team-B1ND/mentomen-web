import * as S from './style';
import React from 'react';
import { useMyPost, useUserInfo } from '../../querys/user/user.query';
import ProfileBar from '../common/Profile';
import MyPageList from './myPageList';

function Mypage(){

    const { data: UserInfo } = useUserInfo();
    const { data: MyPost } = useMyPost();
    return(
        <>
            <ProfileBar />
            <S.MyPageContainer>
                <S.MyPageWrap>
                    <MyPageList data={MyPost!!}/>
                </S.MyPageWrap>
            </S.MyPageContainer>
        </>
    );
}

export default React.memo(Mypage);