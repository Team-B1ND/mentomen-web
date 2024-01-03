import { ResponseType } from "../common/common.type";

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

export interface NoticeCheckResponse extends ResponseType {
  data: NoticeCheckType;
}

export interface NoticeListResponse extends ResponseType {
  data: NoticeListType[];
}
