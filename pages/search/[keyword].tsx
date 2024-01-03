import Search from "@/components/Search";
import postRepository from "@/repositories/Post/post.repository";
import { NextPageContext } from "next";
import { dehydrate, QueryClient } from "react-query";

const SerachPage = () => {
  return <Search />;
};

SerachPage.getInitialProps = async (ctx: NextPageContext) => {
  const queryClient = new QueryClient();
  if (ctx.pathname) {
    await queryClient.prefetchQuery(["search/keyword", ctx.pathname], () =>
      postRepository.getPostByKeyWord(ctx.pathname)
    );
  }
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default SerachPage;
