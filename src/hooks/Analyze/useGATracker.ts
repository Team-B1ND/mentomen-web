import GoogleAnalyzer from "@/src/utils/Analyze/GoogleAnalyzer";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useGATracker = () => {
  const router = useRouter();
  const pageView = GoogleAnalyzer.pageView;

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};

export default useGATracker;
