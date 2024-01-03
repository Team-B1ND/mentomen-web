import { useRouter } from "next/router";
import { useState } from "react";

export const useKeyWordSearch = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSerachChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search.trim() === "") {
      window.alert("키워드를 입력해주세요!");
      return;
    }

    router.push(`/search/${search}`);
  };

  return { handleSerachChange, handleSearchSubmit, search };
};
