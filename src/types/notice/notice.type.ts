import { Response } from "../Util/response.type";

export interface NoticeCheckType {
  noticeStatus: string;
}

export interface NoticeListType {
  commentContent: string;
  createDateTime: string;
  noticeStatus: string;
  postId: number;
  senderName: string;
  senderProfileImage: string;
}

export interface NoticeCheckResponse extends Response {
  data: NoticeCheckType;
}

export interface NoticeListResponse extends Response {
  data: NoticeListType[];
}
