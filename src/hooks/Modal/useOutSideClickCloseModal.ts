import { useCallback, useEffect, useRef } from "react";

export const useOutSideClickCloseModal = (closeCallback: () => void) => {
  const modalEl = useRef<HTMLDivElement>(null);

  const clickOutside = useCallback(
    (e: Event) => {
      if (modalEl.current && !modalEl.current.contains(e.target as Node)) {
        closeCallback();
      }
    },
    [closeCallback]
  );

  useEffect(() => {
    window.addEventListener("mouseup", clickOutside);
    return () => {
      window.removeEventListener("mouseup", clickOutside);
    };
  }, [modalEl, clickOutside]);

  return {
    modalEl,
  };
};
