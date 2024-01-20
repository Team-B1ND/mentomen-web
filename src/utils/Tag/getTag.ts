import android from "@/public/icons/develop/android.svg";
import design from "@/public/icons/develop/design.svg";
import ios from "@/public/icons/develop/ios.svg";
import server from "@/public/icons/develop/server.svg";
import web from "@/public/icons/develop/web.svg";

class GetTag {
  public getTagColor = (tagName: string) => {
    switch (tagName) {
      case "WEB":
        return "#E58C59";
      case "SERVER":
        return "#3E89DB";
      case "iOS":
        return "#4C4C4C";
      case "DESIGN":
        return "#D83F67";
      case "ANDROID":
        return "#35C174";
      default:
        return "#000";
    }
  };

  public getTagIcon = (tagName: string) => {
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
}

export default new GetTag();
