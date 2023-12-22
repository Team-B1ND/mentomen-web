import android from "../../assets/logo/android.svg";
import design from "../../assets/logo/design.svg";
import ios from "../../assets/logo/ios.svg";
import server from "../../assets/logo/server.svg";
import web from "../../assets/logo/web.svg";

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
