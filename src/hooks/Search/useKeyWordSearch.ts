import { MenToMenToast } from "@/src/utils/Toast/menToMenToast";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";

export const useKeyWordSearch = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSerachChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    setIsActiveSearch: Dispatch<SetStateAction<boolean>>
  ) => {
    e.preventDefault();

    if (search.trim() === "") {
      MenToMenToast.showInfo("키워드를 입력해주세요!");
      return;
    }
    setIsActiveSearch(false);
    router.push(`/search/${search}`);
  };

  return { handleSerachChange, handleSearchSubmit, search };
};
