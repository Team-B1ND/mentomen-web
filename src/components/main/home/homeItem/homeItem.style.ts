import styled from "styled-components";

export const MainListSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 500px;
  margin-top: 100px;
  margin-left: 150px;

  background: #ffffff;
  /* web_shadow */

  box-shadow: 0px 4px 8px rgba(190, 190, 190, 0.2);
  border-radius: 5px;
`;

export const MainListLeftSection = styled.div`
  flex-direction: column;
  margin-left: 30px;
`;

export const MainProfileSection = styled.div`
  display: flex;
  width: 200px;
  height: 45px;

  padding-top: 28px;
`;

export const MainProfileImg = styled.img`
  border-radius: 81px;
  width: 51px;
  height: 51px;
`;

export const ListUserInfo = styled.div`
  margin-top: 5px;
  margin-left: 10px;
  flex-direction: column;
  width: 300px;
  height: 41px;
`;

export const ListUserName = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
`;

export const ListStdInfo = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  width: 110px;
  color: #858585;
`;

export const ListContent = styled.p`
  width: 600px;
  margin-top: 100px;
  overflow-wrap: break-word;
`;

export const CommentImg = styled.img`
  width: 130px;
  height: 48px;
  cursor: pointer;

  margin-top: 880px;
`;

export const MainRightSection = styled.div`
  flex-direction: column;
  margin-left: -30px;
`;

export const MainListImg = styled.img`
  width: 250px;
  height: 250px;

  border-radius: 5px;
`;
