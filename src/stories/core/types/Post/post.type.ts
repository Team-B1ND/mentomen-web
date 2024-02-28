import { ResponseType } from "../common/common.type";

export interface PostItemType {
  author: number;
  content: string;
  createDateTime: string;
  imgUrls: string[];
  postId: number;
  profileUrl: string;
  stdInfo: StdInfoType;
  tag: string;
  updateDateTime: string;
  updateStatus: "UPDATE" | "NOT_UPDATE";
  userName: string;
}

export interface PostPatchItem {
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
export interface PostResponse extends ResponseType {
  data: PostItemType;
}

//전체 게시글 불러오기
export interface PostItemResponse extends ResponseType {
  data: PostItemType[];
}

export interface PostSubmitType {
  content: string;
  imgUrls: string[];
  tag: string;
}
