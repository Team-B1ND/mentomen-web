import android from "@/assets/icons/develop/android.svg";
import design from "@/assets/icons/develop/design.svg";
import ios from "@/assets/icons/develop/ios.svg";
import server from "@/assets/icons/develop/server.svg";
import web from "@/assets/icons/develop/web.svg";

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
