const hideHeaderInPages = [
  "/callback",
  "/request-mentor/write",
  "/detail/[id]/modify",
];

const hideNavInPages = ["/detail/[id]", "/notification", ...hideHeaderInPages];

const pageList = [
  "/",
  "/search/[keyword]",
  "/tag/[tag]",
  "/mypage",
  ...hideNavInPages,
];

export const useHideHeaderOrNav = (path: string) => {
  // 해당 페이지가 유효한 페이지인지 검사
  const handleIsValidPage = () => {
    if (pageList.includes(path)) {
      return true;
    }

    return false;
  };

  const handleIsHideHeader = () => {
    if (handleIsValidPage()) {
      if (hideHeaderInPages.includes(path)) {
        return true; //
      }
      return false;
    }

    return false;
  };

  const handleIsHideNav = () => {
    if (handleIsValidPage()) {
      if (hideNavInPages.includes(path)) {
        return true;
      }
      return false;
    }

    return false;
  };

  return { handleIsHideHeader, handleIsHideNav };
};
