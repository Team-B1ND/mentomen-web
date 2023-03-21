import styled from "styled-components";

export const ProfileBarContainer = styled.div`
  width: 300px;
  height: calc(100vh - 75px);
  background-color: white;
  position: fixed;
  top: 75px;
  left: 0;

  display: flex;
  flex-direction: column;
`;

export const UserInfo = styled.div`
  width: 100%;
  min-height: 202px;

  text-align: center;
  font-weight: 400;
`;

export const UserProfile = styled.img`
  width: 150px;
  height: 150px;

  margin-top: 38px;

  border-radius: 100px;
`;

export const UserName = styled.p`
  margin-top: 10px;

  font-size: 18px;
  line-height: 21px;

  color: #000000;
`;

export const UserGrade = styled.p`
  font-size: 16px;
  line-height: 19px;

  margin-top: 2px;
  color: #858585;
`;

export const FiledContainer = styled.div`
  min-width: 92px;
  min-height: 269px;

  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 21px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  margin-left: 39px;
`;

export const FiledItemWrap = styled.div`
  width: 100%;

  display: flex;
  column-gap: 20px;
`;

export const FiledImg = styled.img`
  width: 16px;
  height: 23px;
`;

export const FiledName = styled.p``;

export const MyInfoPathContainer = styled.div`
  display: flex;

  justify-content: space-between;

  max-width: 170px;
  margin-top: 73px;

  margin-left: 40px;

  font-size: 18px;
  line-height: 21px;
`;

export const MyInfoPathText = styled.p`
  cursor: pointer;
`;

export const MyInfoPathImg = styled.img`
  width: 15px;
  height: 15px;
`;

export const LogoutText = styled.p`
  margin-top: 305px;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-decoration-line: underline;
  color: #858585;
  cursor: pointer;
`;
