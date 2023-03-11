import styled from "styled-components";

export const NoitceContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const NoitceLayOut = styled.div`
  width: 1000px;
  height: 700px;
  background-color:#FFFFFF;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  animation: fadein 1s;
  -moz-animation: fadein 1s;
  -webkit-animation: fadein 1s;
  -o-animation: fadein 1s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const NoticeWrap = styled.div`
    overflow-y:scroll;
    box-sizing:border-box;
    display: flex;
    flex-direction: column;
    height: 700px;
    &::-webkit-scrollbar{
        display: none;
    }
`;

export const NoticeLists = styled.div`
    width: 900px;
    height: 100px;
    background-color:#FFFFFF;
    border-radius:10px;
    margin-top: 40px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    margin-left:50px;
    cursor: pointer;
    &:hover{
      background-color:rgba(0, 0, 0, 0.2);
    }
`;

export const NoticeAbleContaienr = styled.div`
    justify-content:space-between;
    display:flex;
    flex-direction:row;
    margin-top:10px;
`;

export const NoticeProfileContainer = styled.div`
    width: 170px;
    height: 80px;
    display:flex;
    flex-direction:row;
    margin-left:10px;
`;

export const NoticeProfileImg = styled.img`
    width: 55px;
    height: 55px;
    border-radius:40px;
    object-fit:cover;
    margin:10px 20px 0 0;
`;

export const NoticeProfileName = styled.div`
    font-size:20px;
    line-height:80px;
`;

export const NoticeCommentContainer = styled.div`
    width:700px;
    height: 80px;
    font-size:20px;
    display:flex;
    flex-direction:column;
`;

export const NoticeComment = styled.div`
    margin-top: 20px;
`;

export const NoneNotice = styled.div`
  line-height:700px;
  text-align:center;
  font-size:25px;
`;


