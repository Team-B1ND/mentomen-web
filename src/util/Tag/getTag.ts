import android from "../../assets/logo/Android.svg";
import design from "../../assets/logo/Design.svg";
import ios from "../../assets/logo/Ios.svg";
import server from "../../assets/logo/Server.svg";
import web from "../../assets/logo/Web1.svg";

export const getTag = (tagName: string) => {
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
