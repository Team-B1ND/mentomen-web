import Provider from "@/src/components/Provider";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "@/src/stories/core/design-token/font.css";
import { DefaultSeo } from "next-seo";
import { useGATracker, useSeoConfig } from "../stories/hooks";
import { MenToMenToastContainer } from "../stories/utils";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
          },
        },
      })
  );

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
