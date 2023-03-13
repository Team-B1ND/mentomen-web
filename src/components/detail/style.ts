import styled from "styled-components";
import { IoSend } from "react-icons/io5";
import { AiOutlineMore } from "react-icons/ai";

export const DetailContainer = styled.div`
    width:calc(100% - 300px);
    height:calc(100vh - 75px);
    position:fixed;
    right:0;
    bottom:0;
`;

export const DetailViewContainer = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
`;

export const DetailView = styled.div`
    width: 912px;
    height: 450px;
    background-color:#FFFFFF;
    border-radius:10px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    margin:0 auto;
    margin-top:70px;
    border: 1px solid rgba(0, 0, 0, 0.175);
`;

export const DetailCommentForm = styled.form`
    display:flex;
    margin: 0 auto;
    margin-top:70px;
    margin-bottom:20px;
`;


export const DetailComment = styled.input`
    width: 862px;
    height: 50px;
    padding-left:20px;
    font-size:24px;
    border-radius:40px 0 0 40px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    border:none;
    outline:none;
    resize:none;
`;

export const DetailCommentSubmitContainer = styled.div`
    height: 50px;
    width:60px;
    background-color:#FFFFFF;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    border-radius:0 40px 40px 0;
    border-left:none;
    text-align:center;
    padding-top:4px;
`;

export const DetailCommentSubmit = styled(IoSend)`
    width: 40px;
    height: 40px;
    color:#4D61FA;
    cursor: pointer;
`;

export const DetailCommentsWrap = styled.div`
    overflow-y: scroll;
    height:300px;
    box-sizing: border-box;
    display: flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content: center;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const DetailCommentsContainer = styled.div`
    width: 912px;
    height: 80px;
    margin-top:50px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.175);
    display:flex;
    flex-direction:row;
`;

export const DetailCommentProfileContainer = styled.div`
    display:flex;
    flex-direction:row;
    width: 110px;
    height: 50px;
`;

export const DetailCommentProfileImg = styled.img`
    width:50px;
    height:50px;
    border-radius: 40px;
`;

export const DetailCommentProfileName = styled.div`
    margin: auto;
    margin-left: 10px;
    font-size: 19px;
`;

export const DetailCommentAnswer = styled.div`
    width: 702px;
    height: 50px;
    margin-left: 40px;
    font-size:19px;
    line-height: 50px;
    overflow-y:scroll;
`;

export const DetailCommentBtnContainer = styled.div`
`;

export const DetailCommentMoreBtn = styled(AiOutlineMore)`
    line-height:60px;
    width: 30px;
    height: 30px;
    margin-left:20px;
    cursor: pointer;
`;