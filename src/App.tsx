import PageTemplate from "./components/Common/PageTemplate/pageTemplate";
import Router from "./router/router";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { B1ndToastContainer } from "@b1nd/b1nd-toastify";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <B1ndToastContainer />
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
