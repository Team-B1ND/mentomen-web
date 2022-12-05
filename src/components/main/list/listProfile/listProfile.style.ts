import styled from "styled-components";

export const ListProfileContainer = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;

  background-color: white;
  padding-bottom: 15px;
  box-sizing: border-box;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const MainProfile = styled.img`
  width: 150px;
  height: 150px;

  border-radius: 100px;
  margin-top: 38px;
`;

export const MainUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
`;

export const MainTag = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Line = styled.div`
  display: flex;
  margin-top: 40px;
  column-gap: 20px;
  padding: 0px 40px;
  cursor: pointer;
`;

export const CheckList = styled.div`
  display: flex;
  width: 200px;
  margin-top: 70px;
  margin-left: 38px;
  column-gap: 20px;

  cursor: pointer;
`;

export const Copy = styled.img`
  width: 18px;
  height: 18px;
`;

export const MainLogOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 195px;

  cursor: pointer;
`;

export const MainUserName = styled.p`
  font-size: 18px;

  margin-top: 10px;
  color: #000000;
`;

export const MainUserGrade = styled.p`
  font-size: 16px;

  margin-top: 2px;
  color: #858585;
`;
