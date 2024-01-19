import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { HideHeaderAtom, HideNavAtom } from "@/stores/common/common.store";

const useHideHeaderOrNav = (hideType: "Header" | "Nav" | "Both") => {
  const setHideHeader = useSetRecoilState(HideHeaderAtom);
  const setHideNav = useSetRecoilState(HideNavAtom);

  useEffect(() => {
    switch (hideType) {
      case "Header":
        setHideHeader(true);
        return () => setHideHeader(false);
      case "Nav":
        setHideNav(true);
        return () => setHideNav(false);
      case "Both":
        setHideHeader(true);
        setHideNav(true);
        return () => {
          setHideHeader(false);
          setHideNav(false);
        };
    }
  }, [setHideHeader, setHideNav]);
};

export default useHideHeaderOrNav;
