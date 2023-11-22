import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 100vh;
  padding-top: 75px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  row-gap: 4rem;

  border-right: 1px solid #ddd;
`;

export const UserInfoContainer = styled.div`
  height: auto;
  padding-top: 20px;
  font-weight: 400;

  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
`;

export const UserProfile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
`;

export const UserName = styled.p`
  font-size: 18px;
  color: #000000;
`;

export const UserGrade = styled.p`
  font-size: 16px;
  color: #858585;
`;

export const FiledUl = styled.ul`
  width: 100%;
  height: auto;

  display: flex;
  row-gap: 2rem;
  flex-direction: column;

  padding-left: 30px;
  font-weight: 400;
  font-size: 18px;
`;

export const FiledItemWrap = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const FiledImg = styled.img`
  width: 16px;
  height: 23px;
`;

export const FiledName = styled.p``;

export const MyInfoPathContainer = styled.div`
  padding-left: 30px;

  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 18px;
`;

export const MyInfoPathText = styled.p`
  cursor: pointer;
`;

export const MyInfoPathImg = styled.img`
  width: 15px;
  height: 15px;
`;

export const LogoutText = styled.p`
  font-size: 15px;
  text-align: center;
  color: #858585;
  cursor: pointer;
`;
