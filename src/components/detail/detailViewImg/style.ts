import styled from "styled-components";

export const DetailViewImgContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    background-color: rgba(0, 0, 0, 0.4);
`;

export const DetailViewImgLayOut = styled.div`
    width: 1200px;
    height: 700px;
    text-align: center;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

export const DetailViewImg = styled.img`
    width: 1200px;
    height: 750px;
    border-radius:10px;
    object-fit:cover;
`;

export const DetailViewImgClose = styled.div`
    font-size:300px;
    text-align:right;
`;