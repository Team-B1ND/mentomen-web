import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { HideHeaderAtom } from "../../stores/Header/header.store";

const useHideHeader = () => {
  const setHideHeader = useSetRecoilState(HideHeaderAtom);
  useEffect(() => {
    setHideHeader(true);
    return () => setHideHeader(false);
  }, [setHideHeader]);
};

export default useHideHeader;
