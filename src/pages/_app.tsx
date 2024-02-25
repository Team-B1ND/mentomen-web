import Provider from "@/src/components/Common/Provider";
import { MenToMenToastContainer } from "@/src/utils/Toast/menToMenToastContainer";
import { NextComponentType } from "next";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "@/src/styles/font.css";
import useGATracker from "../hooks/Analyze/useGATracker";
import { DefaultSeo } from "next-seo";
import { useNextSeoConfig } from "../hooks/SEO/useNextSeoConfig";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const [isClient, setIsClient] = useState(false);
  const { SeoDefaultConfigProps } = useNextSeoConfig({
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

App.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default App;
