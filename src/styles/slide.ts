import Slider from "react-slick";
import styled, { CSSObject } from "styled-components";
import flex from "./flex";

export const SlideWrapper = styled.div`
  width: 100%;
  height: auto;
`;

export const StyledSlider = styled(Slider)<{
  arrowSize?: string;
}>`
  .slick-track {
    ${flex({ alignItems: "center", justifyContent: "center" })};
  }

  .slick-prev {
    z-index: 1;
    left: 8px !important;
  }
  .slick-next {
    right: 13px !important;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: ${({ arrowSize }) => arrowSize || "25px"};
    color: #ddd;
    transition: all 0.3s ease-in-out;
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: 30px;
    color: #ddd;

    li button:before {
      color: #ddd;
    }

    li.slick-active button:before {
      color: #ddd;
    }
  }
`;

export const ItemImage = styled.img<{ customstyle?: CSSObject }>`
  width: 100%;
  height: 100%;

  object-fit: contain;
  border: none;
  outline: none;
  ${({ customstyle }) => customstyle}
`;
