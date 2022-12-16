import PageTemplate from "./components/common/pageTemplate/pageTemplate";
import Router from "./router/router";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <BrowserRouter>
            <PageTemplate>
              <Router />
            </PageTemplate>
          </BrowserRouter>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
