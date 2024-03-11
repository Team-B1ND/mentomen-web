import CommonErrorHandler from "./CommonErrorHandler";

class FileErrorHandler extends CommonErrorHandler {
  uploadError = (status: number) => {
    switch (status) {
      case 400:
        return "확장자가 알맞지 않습니다.";
      case 413:
        return "이미지 용량이 큽니다.";
      case 500:
        return this.serverError();
      default:
        return "이미지를 불러오지 못했습니다.";
    }
  };
}

export default new FileErrorHandler();
