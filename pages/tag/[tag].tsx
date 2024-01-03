import Tag from "@/components/Tag";
import PostRepository from "@/repositories/Post/post.repository";
import { NextPageContext } from "next";
import { dehydrate, QueryClient } from "react-query";

const TagPage = () => {
  return <Tag />;
};

TagPage.getInitialProps = async (ctx: NextPageContext) => {
  const queryClient = new QueryClient();

  if (ctx.query.tag) {
    await queryClient.prefetchQuery(
      ["post/GetTagQuery", ctx.query.tag as string],
      () => PostRepository.getPostByKeyWord(ctx.query.tag as string)
    );
  }
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default TagPage;
