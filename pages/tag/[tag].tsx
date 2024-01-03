import Tag from "@/components/Tag";
import PostRepository from "@/repositories/Post/post.repository";
import { NextPageContext } from "next";
import { dehydrate, QueryClient } from "react-query";

const TagPage = () => {
  return <Tag />;
};

TagPage.getInitialProps = async (ctx: NextPageContext) => {
  const queryClient = new QueryClient();

  if (ctx.pathname) {
    await queryClient.prefetchQuery(["post/GetTagQuery", ctx.pathname], () =>
      PostRepository.getPostByKeyWord(ctx.pathname)
    );
  }
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default TagPage;
