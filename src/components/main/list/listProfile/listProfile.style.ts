import styled from "styled-components";

export const ListProfileContainer = styled.div`
  max-width: 300px;
  min-width: 300px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
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
  margin-top: 60px;
`;

export const MainUserInfo = styled.div`
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTag = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 10px;
`;
export const FieldLine = styled.div`
  display: flex;
  margin-top: 40px;
  column-gap: 20px;
  cursor: pointer;
  padding: 0px 40px;

  transition: border-bottom 0.1s ease-out;
`;

export const CheckList = styled.div`
  display: flex;
  width: 200px;
  margin-top: 70px;
  margin-left: 38px;
  column-gap: 20px;

  cursor: pointer;
`;

export const PathContainer = styled.div`
  margin-top: 100px;
  display: flex;
  padding: 0px 40px;

  cursor: pointer;
`;

export const PathMyList = styled.img`
  width: 18px;
  height: 18px;
`;

export const PathText = styled.p`
  margin-left: 20px;
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

  margin-top: 15px;
  color: #000000;
`;

export const MainUserGrade = styled.p`
  font-size: 16px;

  margin-top: 2px;
  color: #858585;
`;

export const LogOutText = styled.p`
  margin-top: 157px;

  text-align: center;
  text-decoration-line: underline;

  font-weight: 400;
  font-size: 15px;
  color: #858585;

  cursor: pointer;
`;
