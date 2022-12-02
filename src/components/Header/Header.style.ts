import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;

  position: fixed;
  width: 100%;
  height: 60px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgba(0, 0, 0, 0.175);
`;

export const Title = styled.img`
  width: 121px;
  height: 40px;
  margin-top: 5px;
  margin-left: 50px;
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  margin-right: -10px;

  box-sizing: border-box;
  border-radius: 10px;
  padding: 6px 12px 6px 5px;
  background: #f2f2f2;
  border-radius: 10px;
  margin-left: 500px;
`;

export const SearchImg = styled.img`
  width: 19px;
  height: 19px;
`;

export const SearchInput = styled.input`
  width: 350px;
  height: 50px;
  width: 300px;
  height: 30px;
  background: #f2f2f2;
  border: 0px;
  outline: none;

  font-size: 15px;
`;

export const Intro = styled.h1`
  font-size: 15px;
  margin-left: 500px;
  margin-top: 15px;
`;
