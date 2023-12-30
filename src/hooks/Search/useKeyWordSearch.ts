import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useKeyWordSearch = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleSerachChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search.trim() === "") {
      B1ndToast.showInfo("키워드를 입력해주세요!");
      return;
    }

    navigate(`/search/${search}`);
  };

  return { handleSerachChange, handleSearchSubmit, search };
};
