import { GetServerSideProps } from "next";
import { ISitemapField, getServerSideSitemap } from "next-sitemap";
import PostApi from "@/src/services/Post/api";

export const getServerSideProps: GetServerSideProps = async () => {
  const baseUrl =
    process.env.NEXT_PUBLIC_SUB_DOMAIN_URL || "http://localhost:3000";
  const { data } = await PostApi.getAllPostApi();

  const sitemapFields: ISitemapField[] = data.map((item) => ({
    loc: `${baseUrl}/detail/${item.postId}`,
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: 1,
  }));

  return {
    props: {
      ...getServerSideSitemap(sitemapFields),
    },
  };
};

export default () => {};
