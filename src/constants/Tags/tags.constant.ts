import Android from "../../assets/logo/android.svg";
import Web from "../../assets/logo/web.svg";
import Server from "../../assets/logo/server.svg";
import Design from "../../assets/logo/design.svg";
import iOS from "../../assets/logo/ios.svg";

import fillAndroid from "../../assets/tags/Fill/android.svg";
import fillDesign from "../../assets/tags/Fill/design.svg";
import filliOS from "../../assets/tags/Fill/ios.svg";
import fillServer from "../../assets/tags/Fill/server.svg";
import fillWeb from "../../assets/tags/Fill/web.svg";

import unFillAndroid from "../../assets/tags/UnFill/android.svg";
import unFillDesign from "../../assets/tags/UnFill/design.svg";
import unFilliOS from "../../assets/tags/UnFill/ios.svg";
import unFillServer from "../../assets/tags/UnFill/server.svg";
import unFillWeb from "../../assets/tags/UnFill/web.svg";

export const NAV_TAGS_ITEMS = [
  {
    title: "DESIGN",
    color: "#EC6B77",
    image: Design,
  },
  {
    title: "WEB",
    color: "#F19F62",
    image: Web,
  },
  {
    title: "ANDROID",
    color: "#5AAC73",
    image: Android,
  },
  {
    title: "SERVER",
    color: "#628FD3",
    image: Server,
  },
  {
    title: "iOS",
    color: "#4C4C4C",
    image: iOS,
  },
];

export const POSTEDITOR_TAGS_ITEMS = [
  {
    id: "DESIGN",
    fillTag: fillDesign,
    unFillTag: unFillDesign,
  },
  {
    id: "WEB",
    fillTag: fillWeb,
    unFillTag: unFillWeb,
  },
  {
    id: "ANDROID",
    fillTag: fillAndroid,
    unFillTag: unFillAndroid,
  },
  {
    id: "SERVER",
    fillTag: fillServer,
    unFillTag: unFillServer,
  },
  {
    id: "IOS",
    fillTag: filliOS,
    unFillTag: unFilliOS,
  },
];
