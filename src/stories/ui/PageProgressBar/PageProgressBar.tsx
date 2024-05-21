import NextNProgress, { type NextNProgressProps } from "nextjs-progressbar";

export const PageProgressBar = ({ ...attr }: NextNProgressProps) => {
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
