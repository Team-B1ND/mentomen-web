import Provider from "@/src/components/Common/Provider";
import { MenToMenToastContainer } from "@/src/utils/Toast/menToMenToastContainer";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "@/src/styles/font.css";
import useGATracker from "../hooks/Analyze/useGATracker";
import { DefaultSeo } from "next-seo";
import { useSeoConfig } from "../hooks/SEO/useSeoConfig";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const [isClient, setIsClient] = useState(false);
  const { SeoDefaultConfigProps } = useSeoConfig({
    title: "멘투멘 - 멘토와 멘티를 잇다",
    description: "멘토에게 궁금하거나 알고 싶었던 전공지식에 관해 물어보세요!",
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useGATracker();

  return (
    <>
      <DefaultSeo {...SeoDefaultConfigProps} />
      <Head>
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SEARCH_ID}
        />
      </Head>
      {isClient && (
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <RecoilRoot>
              <MenToMenToastContainer />
              <Provider>
                <Component {...pageProps} />
              </Provider>
            </RecoilRoot>
          </Hydrate>
        </QueryClientProvider>
      )}
    </>
  );
};

export default App;
