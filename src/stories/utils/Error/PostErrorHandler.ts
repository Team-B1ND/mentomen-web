import CommonErrorHandler from "./CommonErrorHandler";

class PostErrorHandler extends CommonErrorHandler {
  registPost = (status: number) => {
    switch (status) {
      case 500:
        return this.serverError();
      default:
        return "멘토 요청 글을 작성하지 못했습니다.";
    }
  };

  modifyPost = (status: number) => {
    switch (status) {
      case 500:
        return this.serverError();
      default:
        return "멘토 요청 글을 수정하지 못했습니다.";
    }
  };

  deletePost = (status: number) => {
    switch (status) {
      case 500:
        return this.serverError();
      default:
        return "멘토 요청 글을 삭제하지 못했습니다.";
    }
  };
}

export default new PostErrorHandler();
