import android from "../../assets/icons/develop/android.svg";
import design from "../../assets/icons/develop/design.svg";
import ios from "../../assets/icons/develop/ios.svg";
import server from "../../assets/icons/develop/server.svg";
import web from "../../assets/icons/develop/web.svg";

export const getTagIcon = (tagName: string) => {
  switch (tagName) {
    case "WEB":
      return web;
    case "SERVER":
      return server;
    case "IOS":
      return ios;
    case "DESIGN":
      return design;
    case "ANDROID":
      return android;
  }
};
