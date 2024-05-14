import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Pretendard-Regular' !important;
     }

     body {
      background-color: #f4f4f4;
     }
     
     img {
      user-select: none;
      user-drag: none;
     }

    ${reset}
`;
