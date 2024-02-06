export const googleTagManagerScriptURL =
  `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_LOCAL_TRACKING_ID}` as const;

export const googleAnalyticsScript = {
  __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
  
      gtag('config', '${process.env.NEXT_PUBLIC_GA_LOCAL_TRACKING_ID}', {
        page_path: window.location.pathname,
      });
    `,
} as const;
