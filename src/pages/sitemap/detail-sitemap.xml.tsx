import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ISitemapField, getServerSideSitemapLegacy } from "next-sitemap";
import PostApi from "@/src/services/Post/PostApi";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const baseUrl =
    process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";
  const { data } = await PostApi.getAllPostApi();

  const sitemapFields: ISitemapField[] = data.map((item) => ({
    loc: `${baseUrl}/detail/${item.postId}`,
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: 1,
  }));

  return getServerSideSitemapLegacy(context, sitemapFields); // todo: getServerSideSitemap...
};

export default () => {};
