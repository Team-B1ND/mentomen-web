import { useEffect, useRef, useState } from "react";

const useShowMoreContent = (content: string) => {
  const contentRef = useRef<HTMLParagraphElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [isShowMoreContent, setIsShowMoreContent] = useState(false);

  useEffect(() => {
    setContentHeight(contentRef.current?.offsetHeight!);
  }, [content, contentRef.current?.offsetHeight!]);

  return {
    contentRef,
    contentHeight,
    isShowMoreContent,
    setIsShowMoreContent,
  };
};

export default useShowMoreContent;
