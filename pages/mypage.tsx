import userRepository from "@/repositories/User/user.repository";
import { dehydrate, QueryClient } from "react-query";
import MyPost from "../components/MyPost";
import useAutoTopScroll from "../hooks/common/useAutoTopScroll";

const MyPostPage = () => {
  // useAutoTopScroll();
  return <MyPost />;
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("list/useGetList", userRepository.getMyPost);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MyPostPage;
