import { DefaultSeoProps, NextSeoProps } from "next-seo";
import { useRouter } from "next/router";

interface Type {
  title: string;
  description: string;
  url?: string;
}

export const useSeoConfig = ({ title, description, url }: Type) => {
  const { pathname } = useRouter();

  const SeoNextConfigProps: NextSeoProps = {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://mentomen.vercel.app${url || "/"}`,
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
      url: `https://mentomen.vercel.app${pathname}`,
      images: [
        {
          url: "/images/meta-iPhone-image.png",
        },
      ],
    },
  };
  return { SeoNextConfigProps, SeoDefaultConfigProps };
};
