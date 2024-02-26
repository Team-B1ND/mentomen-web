import Provider from "@/src/components/Common/Provider";
import { MenToMenToastContainer } from "@/src/utils/Toast/menToMenToastContainer";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "@/src/styles/font.css";
import useGATracker from "../hooks/Analyze/useGATracker";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useGATracker();

  return (
    <>
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
