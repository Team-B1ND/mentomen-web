import { ResponseType } from "../common/common.type";

export interface postCommentType {
  content: string;
  postId: number;
}

export interface CommentType extends ResponseType {
  commentId: number;
  content: string;
  createDateTime: string;
  postId: number;
  profileUrl: string;
  stdInfo: {
    grade: number;
    number: number;
    room: number;
  };
  updateDateTime?: string;
  userId: number;
  userName: string;
}

export interface CommentDataType extends ResponseType {
  data: CommentType[];
}

export interface patchCommentType {
  commentId: number;
  content: string;
}
