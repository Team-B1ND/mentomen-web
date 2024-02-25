import { NextSeoProps } from "next-seo";

interface Type {
  title: string;
  description: string;
}

export const useNextSeoConfig = ({ title, description }: Type) => {
  const SeoConfigProps: NextSeoProps = {
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
          url: "/images/meta-mentomen-image.jpeg",
        },
      ],
    },
  };
  return { SeoConfigProps };
};
