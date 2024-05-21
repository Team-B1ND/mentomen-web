import { GoogleAnalyzer, MenToMenToast } from "@/src/stories/utils";
import { useRouter } from "next/router";
import { type Dispatch, type SetStateAction, useState } from "react";

export const useKeyWordSearch = () => {
  const [search, setSearch] = useState<string>("");
  const pageView = new GoogleAnalyzer().pageView;
  const router = useRouter();

  const handleSerachChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    setIsActiveSearch: Dispatch<SetStateAction<boolean>>
  ) => {
    e.preventDefault();
    const link = `/search/${search}`;

    if (search.trim() === "") {
      MenToMenToast.showInfo("키워드를 입력해주세요!");
      return;
    }
    setIsActiveSearch(false);

    pageView(link);
    router.push(link);
  };

  return { handleSerachChange, handleSearchSubmit, search };
};
