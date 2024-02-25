import { DefaultSeoProps, NextSeoProps } from "next-seo";

interface Type {
  title: string;
  description: string;
  url?: string;
}

export const useSeoConfig = ({ title, description, url }: Type) => {
  const SeoNextConfigProps: NextSeoProps = {
    title,
    description,
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/icons/logo/favicon.ico",
      },
    ],
    openGraph: {
      type: "website",
      title,
      description,
      images: [
        {
          url: "/images/meta-iPhone-image.png",
        },
      ],
    },
  };

  const SeoDefaultConfigProps: DefaultSeoProps = {
    title,
    description,
    openGraph: {
      type: "website",
      locale: "ko_KR",
      site_name: "멘투멘",
      title,
      description: description,
      images: [
        {
          url: "/images/meta-iPhone-image.png",
        },
      ],
    },
  };
  return { SeoNextConfigProps, SeoDefaultConfigProps };
};
