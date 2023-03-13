import styled from "styled-components";

export const KeyWordContainer = styled.div`
    width:calc(100% - 300px);
    height:calc(100vh - 75px);
    position:absolute;
    right:0;
    bottom:0;
    display:flex;
    flex-direction:column;
    background-color:#F2F2F2;
`;

export const KeyWordWrap = styled.div`
    overflow-y: scroll;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: center;
    margin-top: 45px;
    height: 90%;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const KeyWordPostLists = styled.div`
    width:912px;
    height:413px;
    background-color:#FFFFFF;
    margin-top: 40px;
    border-radius:10px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
`;

export const KeyWordAbleContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;

export const KeyWordProfileContainer = styled.div`
    display:flex;
`;

export const KeyWordMiniProfileContainer = styled.div`
    width: 166px;
    height: 46px;
    margin: 28px 0 0 30px;
`;

export const KeyWordMiniProfile = styled.img`
    width: 45px;
    height: 46px;
    border-radius: 81px;
    background-color:gray;
    object-fit:cover;
`;

export const KeyWordMyInfoContainer = styled.div`
    display:flex;
    flex-direction:column;
`;

export const KeyWordAuthor = styled.span`
    margin-top: 7px;
    margin-left:9px;
    font-size: 15px;
`;

export const KeyWordDevLogo = styled.img`
    right: 30px;
    width: 30px;
    margin: 18px 30px 0 0;
`;

export const KeyWordClassInfoContainer = styled.div`
    color:#858585;
    margin: 5px 0 0 9px;
`;

export const KeyWordModContainer = styled.div`
    display: flex;
    flex-direction:column;
`;

export const KeyWordModAbleContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
`;

export const KeyWordContentContainer = styled.div`
    width:472px;
    height:228px;
    margin: 22px 0 0 30px;
    line-height:22px;
    font-size:20px;
`;

export const KeyWordImgContainer = styled.div`
    width: 240px;
    height:228px;
    margin: 30px 30px 0 0;
`;

export const KeyWordPostImage = styled.img`
    width:240px;
    height:228px;
    border-radius:10px;
`;

export const KeyWordPostImgNone = styled.div`
    background-color:red;
    width:240px;
    height:228px;
    text-align:center;
    line-height:228px;
    font-size:20px;
    border-radius:10px;
    background-color: rgba(0, 0, 0, 0.175);
`;

export const KeyWordComment = styled.img`
    width:115px;
    height:42px;
    cursor: pointer;
    margin: 30px 0 0 25px;
`;

export const KeyWordNoneKeyWord = styled.div`
    font-size:25px
`;