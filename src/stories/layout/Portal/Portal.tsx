import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PropsWithChildren } from "../../core";

export const Portal = ({ children }: PropsWithChildren) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (typeof window === "undefined") return <></>;

  return mounted ? (
    createPortal(children, document.getElementById("modal-root") as HTMLElement)
  ) : (
    <></>
  );
};
