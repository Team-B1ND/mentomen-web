import styled from "styled-components";
import { IoSend } from "react-icons/io5";

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
`;

export const DetailView = styled.div`
    width: 912px;
    height: 450px;
    background-color:#FFFFFF;
    border-radius:10px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    margin:0 auto;
    margin-top:70px;
`;


export const DetailComment = styled.textarea`
    width: 862px;
    height: 50px;
    padding-left:20px;
    padding-top:10px;
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
    color:blue;
    cursor: pointer;
`;