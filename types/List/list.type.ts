import { ResponseType } from "../common/common.type";

export interface ListItemType {
  author: number;
  content: string;
  createDateTime: string;
  imgUrls: string[];
  postId: number;
  profileUrl: string;
  stdInfo: StdInfoType;
  tag: string;
  updateDateTime: string;
  updateStatus: string | number;
  userName: string;
}

export interface ListPatchItem {
  content: string;
  imgUrls: string[];
  postId: number;
  tag: string;
}

export interface StdInfoType {
  grade: number;
  number: number;
  room: number;
}

//단일 게시글 불러오기
export interface ListResponse extends ResponseType {
  data: ListItemType;
}

//전체 게시글 불러오기
export interface ListItemResponse extends ResponseType {
  data: ListItemType[];
}

export interface PostSubmitType {
  content: string;
  imgUrls: string[];
  tag: string;
}
