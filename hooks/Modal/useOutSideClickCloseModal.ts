import { useEffect, useRef } from "react";

export const useOutSideClickCloseModal = (closeCallback: () => void) => {
  const modalEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: Event) => {
      if (modalEl.current && !modalEl.current.contains(e.target as Node)) {
        closeCallback();
      }
    };

    window.addEventListener("mousedown", clickOutside);

    return () => {
      window.removeEventListener("mousedown", clickOutside);
    };
  }, [modalEl, closeCallback]);

  return {
    modalEl,
  };
};
