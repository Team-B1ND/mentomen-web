import { useEffect } from "react";

const useAutoTopScroll = (dependence?: string) => {
  // useEffect로 페이지 렌더링 시 최상위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dependence]);
};

export default useAutoTopScroll;
