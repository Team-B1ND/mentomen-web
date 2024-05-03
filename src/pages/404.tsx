import { NextSeo } from "next-seo";
import { useSeoConfig } from "../hooks/SEO";
import { Row } from "../stories/layout";

const NotFound = () => {
  const { SeoNextConfigProps } = useSeoConfig({
    title: "멘투멘 | 존재하지 않는 페이지",
    description: "멘투멘 존재하지 않는 페이지입니다.",
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <Row
        $width={"100%"}
        $height={"95vh"}
        $alignItems={"center"}
        $justifyContent={"center"}
      >
        404 - 존재하지 않는 페이지입니다.
      </Row>
    </>
  );
};

export default NotFound;
