import Android from "../../assets/icons/develop/android.svg";
import Web from "../../assets/icons/develop/web.svg";
import Server from "../../assets/icons/develop/server.svg";
import Design from "../../assets/icons/develop/design.svg";
import iOS from "../../assets/icons/develop/ios.svg";

import fillAndroid from "../../assets/icons/tags/Fill/android.svg";
import fillDesign from "../../assets/icons/tags/Fill/design.svg";
import filliOS from "../../assets/icons/tags/Fill/ios.svg";
import fillServer from "../../assets/icons/tags/Fill/server.svg";
import fillWeb from "../../assets/icons/tags/Fill/web.svg";

import unFillAndroid from "../../assets/icons/tags/UnFill/android.svg";
import unFillDesign from "../../assets/icons/tags/UnFill/design.svg";
import unFilliOS from "../../assets/icons/tags/UnFill/ios.svg";
import unFillServer from "../../assets/icons/tags/UnFill/server.svg";
import unFillWeb from "../../assets/icons/tags/UnFill/web.svg";

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
