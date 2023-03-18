import styled from "styled-components";

export const EditModalLayOut = styled.div`
  width: 912px;
  height: 250px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  display:flex;
  flex-direction:column;
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

export const EditMentoRequestContainer = styled.div`
    width: 912px;
    height: 250px;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    margin-top:5px;
`;

export const EditModalTextContainer = styled.div`
    width: 187px;
    height: 30px;
    margin: 10px 0 15px 30px;
    padding-top:15px;
`;

export const EditModalText = styled.div`
    text-align:left;
    font-size:25px;
    color: #06207D;
    font-weight:bold;
`;

export const EditModalContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top:10px;
`;

export const EditModalProfileTextAreaContainer = styled.div`
    display:flex;
    flex-direction:row;
    width: 550px;
    height:160px;
    margin: 10px 0 0 30px;
`;

export const EditModalContentAndTagContainer = styled.div`
    display:flex;
    flex-direction:column;
`;

export const EditModalContentContainer = styled.div`
    display:flex;
    flex-direction:row;
`;

export const EditModalTagContainer = styled.div`
    display:flex;
    flex-direction:row;
    margin:20px 0 0 53px;
`;

export const EditModalTextProfile = styled.img`
    width:45px;
    height:46px;
    border-radius:40px;
    object-fit:cover;
`;

export const EditModalTextArea = styled.textarea`
    resize:none;
    width:500px;
    height:100px;
    outline:none;
    font-size:20px;
    margin: 10px 0 0 10px;
    padding:3px 0 0 3px;
    border:none;
`;

export const EditModalImgContainer = styled.div`
    display:flex;
    flex-direction: row;
    margin:10px 30px 0 0;
`;

export const EditModalUploadImg = styled.img`
    width: 200px;
    height: 150px;
    border-radius:10px;
`;

export const EditModalUploadNoneImg = styled.div`
    width: 200px;
    height: 150px;
    background-color:rgba(0, 0, 0, 0.175);
    border-radius:10px;
    text-align:center;
    line-height:150px;
`;

export const EditModalUploadImgBtn = styled.img`
    width: 51px;
    height: 41px;
    cursor: pointer;
    margin-left:10px;
`;

export const EditModalTagImg = styled.img`
    width:70px;
    height:30px;
    cursor: pointer;
`;