import { useHideHeaderOrNav } from "@/src/stories/hooks";

const NotFound = () => {
  useHideHeaderOrNav("Both");
  return (
    <div>
      <p>404 NotFound</p>
      <p>알맞지 않는 페이지입니다.</p>
    </div>
  );
};

export default NotFound;
