import { FaAngleLeft } from "@react-icons/all-files/fa/FaAngleLeft";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import { Dispatch, SetStateAction } from "react";
import { Row } from "../../layout";
import * as S from "./style";

export interface Props {
  total: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({ total, limit, page, setPage }: Props) => {
  const numPages = Math.ceil(total / limit);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startNumber = page - ((page - 1) % 5); // 시작 숫자 계산
  const endNumber = Math.min(startNumber + 4, numPages); // 끝 숫자 계산

  // 페이지 번호 출력
  const pageNumbers = Array.from({ length: endNumber - startNumber + 1 }).map(
    (_, idx) => startNumber + idx
  );

  return (
    <Row
      $width={"100%"}
      $height={"80px"}
      $alignItems={"center"}
      $justifyContent={"center"}
      $columnGap={"15px"}
    >
      <S.Arrow
        onClick={() => page > 1 && handlePageChange(page - 1)}
        $disabled={page === 1}
      >
        <FaAngleLeft />
      </S.Arrow>

      <S.Nav>
        {pageNumbers.map((pageNumber) => (
          <S.Li
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            aria-current={page === pageNumber ? "page" : undefined}
          >
            {pageNumber}
          </S.Li>
        ))}
      </S.Nav>

      <S.Arrow
        onClick={() => page !== numPages && handlePageChange(page + 1)}
        $disabled={page === numPages}
      >
        <FaAngleRight />
      </S.Arrow>
    </Row>
  );
};
