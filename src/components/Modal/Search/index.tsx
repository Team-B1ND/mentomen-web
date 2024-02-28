import { useKeyWordSearch } from "./hooks";
import { Dispatch, SetStateAction } from "react";
import searchIcon from "@/public/images/Search.svg";
import * as S from "./style";
import { useEscCloseModal, useLockScroll } from "@/src/stories/hooks";

interface Props {
  setIsActiveSearch: Dispatch<SetStateAction<boolean>>;
}

const Search = ({ setIsActiveSearch }: Props) => {
  const { handleSerachChange, handleSearchSubmit, search } = useKeyWordSearch();

  useEscCloseModal(() => setIsActiveSearch(false));
  useLockScroll();

  return (
    <S.Container onClick={() => setIsActiveSearch(false)}>
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <S.Form onSubmit={(e) => handleSearchSubmit(e, setIsActiveSearch)}>
          <button>
            <S.SearchIcon src={searchIcon} alt="검색" />
          </button>
          <input
            placeholder="키워드로 멘토 요청 글 검색"
            value={search}
            onChange={handleSerachChange}
          />
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default Search;
