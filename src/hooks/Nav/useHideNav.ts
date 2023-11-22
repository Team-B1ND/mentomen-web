import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { HideNavAtom } from "../../stores/Nav/nav.store";

const useHideNav = () => {
  const setHideNav = useSetRecoilState(HideNavAtom);
  useEffect(() => {
    setHideNav(true);
    return () => setHideNav(false);
  }, [setHideNav]);
};

export default useHideNav;
