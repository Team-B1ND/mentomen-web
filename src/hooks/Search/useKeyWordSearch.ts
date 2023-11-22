import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useKeyWordSearch = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const onKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && search !== "") {
        navigate(`/search/${search}`);
      }
    },
    [search, navigate]
  );

  return { onChange, onKeyPress, search };
};
