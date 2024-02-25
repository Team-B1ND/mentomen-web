import { DefaultSeoProps, NextSeoProps } from "next-seo";

interface Type {
  title: string;
  description: string;
}

export const useNextSeoConfig = ({ title, description }: Type) => {
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
      url: "https://mentomen.vercel.app",
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
      url: "https://mentomen.vercel.app",
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
