class GoogleAnalyzer {
  public pageView = (url: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_LOCAL_TRACKING_ID!, {
        page_path: url,
      });
    }
  };
}

export default new GoogleAnalyzer();
