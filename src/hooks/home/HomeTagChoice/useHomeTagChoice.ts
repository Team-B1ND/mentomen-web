import { useRecoilState } from "recoil";
import { Tag } from "../../../recoil/home/HomeAtom";
import { useCallback } from "react";

export const useHomeTagChoice = () => {
  const [tag, SetTag] = useRecoilState<string>(Tag);

  const onClick = useCallback(
    (devName: string) => {
      SetTag(devName);
    },
    []
  );

  return { onClick };
};
