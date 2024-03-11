import CommonErrorHandler from "./CommonErrorHandler";

class PostErrorHandler extends CommonErrorHandler {
  registPostHandler = (status: number) => {
    switch (status) {
      case 500:
        return this.serverError();
      default:
        return "멘토 요청 글을 작성하지 못했습니다.";
    }
  };

  modifyPostHandler = (status: number) => {
    switch (status) {
      case 500:
        return this.serverError();
      default:
        return "멘토 요청 글을 수정하지 못했습니다.";
    }
  };

  deletePostHandler = (status: number) => {
    switch (status) {
      case 500:
        return this.serverError();
      default:
        return "멘토 요청 글을 삭제하지 못했습니다.";
    }
  };
}

export default new PostErrorHandler();
