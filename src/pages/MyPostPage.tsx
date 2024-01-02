import MyPost from "../components/MyPost";
import useAutoTopScroll from "../hooks/common/useAutoTopScroll";

export default function MyPostPage() {
  useAutoTopScroll();
  return <MyPost />;
}
