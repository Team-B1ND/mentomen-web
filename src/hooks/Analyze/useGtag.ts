import GoogleAnalyzer from "@/src/utils/Analyze/GoogleAnalyzer";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useGtag = () => {
  const router = useRouter();
  const pageView = GoogleAnalyzer.pageView;

  useEffect(() => {
    if (process.env.NODE_ENV === "development") return;

    router.events.on("routeChangeComplete", pageView);
    return () => {
      router.events.off("routeChangeComplete", pageView);
    };
  }, [router.events]);
};

export default useGtag;
