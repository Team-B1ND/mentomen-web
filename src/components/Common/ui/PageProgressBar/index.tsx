import NextNProgress, { NextNProgressProps } from "nextjs-progressbar";

const PageProgressBar = ({ ...attr }: NextNProgressProps) => {
  return (
    <NextNProgress
      color="#2745F2"
      startPosition={0.3}
      stopDelayMs={200}
      height={1.5}
      showOnShallow={true}
      {...attr}
    />
  );
};

export default PageProgressBar;
