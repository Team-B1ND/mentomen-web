import Head from "next/head";
import React from "react";

interface Type {
  title: string;
  description: string;
  url?: string;
}

export const SEOConfig = ({ title, description, url }: Type) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/icons/logo/favicon.ico" />

      <meta name="description" content={description} />
      <meta
        name="keyword"
        content="MenToMent, 멘투멘, 대구소프트웨어마이스터고등학교, 멘토와 멘티를 잇다, DGSW"
      />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta
        name="og:url"
        content={`https://mentomen.vercel.app${url || "/"}`}
      />
      <meta name="og:image" content="/images/meta-iPhone-image.png" />
      <meta name="og:type" content="website" />
    </Head>
  );
};
