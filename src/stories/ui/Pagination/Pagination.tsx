import { FaAngleLeft } from "@react-icons/all-files/fa/FaAngleLeft";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import { Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";
import { Flex } from "../../layout";

export interface Props {
  total: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({ total, limit, page, setPage }: Props) => {
  const numPages = Math.ceil(total / limit);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Container>
      <ArrowLeft
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
            scrollTop();
          }
        }}
      />
      <Nav>
        {Array.from({ length: numPages }).map((_, idx) => (
          <Li
            key={idx + 1}
            onClick={() => {
              setPage(idx + 1);
              scrollTop();
            }}
            aria-current={page === idx + 1 ? "page" : undefined}
          >
            {idx + 1}
          </Li>
        ))}
      </Nav>
      <ArrowRight
        onClick={() => {
          if (page !== numPages) {
            setPage(page + 1);
            scrollTop();
          }
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80px;

  ${Flex({ alignItems: "center", justifyContent: "center", columnGap: "15px" })}
`;

const Nav = styled.nav`
  ${Flex({ alignItems: "center", columnGap: "7px" })}
`;

const Li = styled.li`
  width: 45px;
  height: 45px;

  font-size: 17px;
  list-style: none;
  cursor: pointer;
  border-radius: 100%;

  ${Flex({ alignItems: "center", justifyContent: "center" })}

  &[aria-current] {
    background-color: #29275c;
    font-weight: bold;
    cursor: revert;
    color: #fff;
    transform: revert;
  }

  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: #29275c;
    color: #fff;
  }
`;

const ArrowDisabled = css`
  cursor: pointer;
  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }
`;

const ArrowLeft = styled(FaAngleLeft)`
  ${ArrowDisabled}
`;

const ArrowRight = styled(FaAngleRight)`
  ${ArrowDisabled}
`;
