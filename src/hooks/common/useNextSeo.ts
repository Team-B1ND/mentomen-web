import { NextSeoProps } from "next-seo";

interface Type {
  title: string;
  description: string;
}

export const useNextSeo = ({ title, description }: Type) => {
  const SeoProps: NextSeoProps = {
    title,
    description,
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    openGraph: {
      type: "website",
      title,
      description,
      url: "https://mentomen.vercel.app",
      images: [
        {
          url: "/meta-image.png",
        },
      ],
    },
  };
  return { SeoProps };
};
