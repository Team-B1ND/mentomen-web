export const getTagColor = (tagName: string) => {
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
