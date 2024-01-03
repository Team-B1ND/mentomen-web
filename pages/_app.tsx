import PageTemplate from "@/components/Common/PageTemplate";
import { MenToMenToastContainer } from "@/util/Toast/menToMenToastContainer";
import { NextComponentType } from "next";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  const [queryClient] = React.useState(new QueryClient());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <RecoilRoot>
              <MenToMenToastContainer />
              <PageTemplate>
                <Component {...pageProps} />
              </PageTemplate>
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
