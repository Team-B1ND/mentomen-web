import { useRecoilState } from "recoil";
import { Cnt, Tag } from "../../../recoil/home/HomeAtom";
import {
  Dev,
  DevOrigin,
} from "../../../components/main/Home/HomeMentoreqRuest/devlogo";
import { useCallback } from "react";
import Web from "../../../assets/logo3/Web.svg";
import Server from "../../../assets/logo3/Server.svg";
import Android from "../../../assets/logo3/Android.svg";
import Design from "../../../assets/logo3/Design.svg";
import Ios from "../../../assets/logo3/Ios.svg";

export const useHomeTagChoice = () => {
  const [cnt, SetCnt] = useRecoilState<number>(Cnt);
  const [tag, SetTag] = useRecoilState<string>(Tag);

  const onClick = useCallback(
    (devName: string) => {
      SetCnt(cnt + 1);
      if (cnt >= 1) {
        window.alert("한 분야만 선택해 주세요!");
        for (let i = 0; i < 5; i++) {
          Dev[i].logo = DevOrigin[i].logo;
        }
        SetCnt(0);
        SetTag("");
      } else {
        switch (devName) {
          case "Web":
            Dev[0].logo = Web;
            SetTag("Web");
            break;
          case "Design":
            Dev[1].logo = Design;
            SetTag("Design");
            break;
          case "Ios":
            Dev[2].logo = Ios;
            SetTag("Ios");
            break;
          case "Server":
            Dev[3].logo = Server;
            SetTag("Server");
            break;
          default:
            Dev[4].logo = Android;
            SetTag("Android");
            break;
        }
      }
    },
    [cnt]
  );

  return { onClick };
};
