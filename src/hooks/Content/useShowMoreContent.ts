import { useEffect, useRef, useState } from "react";

export const useShowMoreContent = (content: string) => {
  const contentRef = useRef<HTMLParagraphElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [isShowMoreContent, setIsShowMoreContent] = useState(false);

  useEffect(() => {
    setContentHeight(contentRef.current?.offsetHeight!);
  }, [content]);

  return {
    contentRef,
    contentHeight,
    setContentHeight,
    isShowMoreContent,
    setIsShowMoreContent,
  };
};
