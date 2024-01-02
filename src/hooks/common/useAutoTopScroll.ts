import { useEffect } from "react";

const useAutoTopScroll = (dependence?: string) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dependence]);
};

export default useAutoTopScroll;
