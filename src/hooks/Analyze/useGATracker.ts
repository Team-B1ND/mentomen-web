import { useRouter } from "next/router";
import { useEffect } from "react";
import { GoogleAnalyzer } from "../../stories/utils";

export const useGATracker = () => {
  const router = useRouter();
  const pageView = new GoogleAnalyzer().pageView;

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
