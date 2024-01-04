import Android from "@/public/icons/develop/android.svg";
import Web from "@/public/icons/develop/web.svg";
import Server from "@/public/icons/develop/server.svg";
import Design from "@/public/icons/develop/design.svg";
import iOS from "@/public/icons/develop/ios.svg";

import fillAndroid from "@/public/icons/tags/Fill/android.svg";
import fillDesign from "@/public/icons/tags/Fill/design.svg";
import filliOS from "@/public/icons/tags/Fill/ios.svg";
import fillServer from "@/public/icons/tags/Fill/server.svg";
import fillWeb from "@/public/icons/tags/Fill/web.svg";

import unFillAndroid from "@/public/icons/tags/UnFill/android.svg";
import unFillDesign from "@/public/icons/tags/UnFill/design.svg";
import unFilliOS from "@/public/icons/tags/UnFill/ios.svg";
import unFillServer from "@/public/icons/tags/UnFill/server.svg";
import unFillWeb from "@/public/icons/tags/UnFill/web.svg";

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
