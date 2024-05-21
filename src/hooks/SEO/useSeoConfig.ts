import type { DefaultSeoProps, NextSeoProps } from "next-seo";

interface Type {
  title: string;
  description: string;
}

export const useSeoConfig = ({ title, description }: Type) => {
  const SeoNextConfigProps: NextSeoProps = {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };

  const SeoDefaultConfigProps: DefaultSeoProps = {
    title,
    description,
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/icons/logo/favicon.ico",
      },
    ],
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ko_KR",
      site_name: "멘투멘",
      images: [
        {
          url: "/images/meta/meta-iPhone-image.png",
        },
      ],
    },
  };
  return { SeoNextConfigProps, SeoDefaultConfigProps };
};
