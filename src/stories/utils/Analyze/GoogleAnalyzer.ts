export class GoogleAnalyzer {
  public pageView = (url: string | URL) => {
    if (typeof window !== "undefined") {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_LOCAL_TRACKING_ID!, {
        page_path: url,
      });
    }
  };
}
