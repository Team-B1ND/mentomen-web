import { useEffect, type KeyboardEvent } from "react";

export const useEscCloseModal = (
  callback: (e?: KeyboardEvent<Element>) => void,
  question?: string
) => {
  const handleKeyDown = (e: KeyboardEvent<Element>) => {
    e.stopPropagation();
    if (e.key === "Escape") {
      if (question) {
        const answer = window.confirm(question);
        if (answer) {
          callback();
        }
      } else {
        callback();
      }
    }
  };

  useEffect(() => {
    const eventListener: EventListener = (e: Event) => {
      handleKeyDown(e as unknown as KeyboardEvent<Element>);
    };

    window.addEventListener("keydown", eventListener);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", eventListener);
    };
  }, []);
};
