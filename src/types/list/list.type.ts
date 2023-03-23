import { Response } from "../Util/response.type";

export interface ListItem {
  author: number;
  content: string;
  createDateTime: string;
  imgUrls: [string];
  postId: number;
  profileUrl: string;
  stdInfo: {
    grade: number;
    number: number;
    room: number;
  };
  tag: string;
  updateDateTime: string | number;
  updateStatus: string | number;
  userName: string;
}

export interface ListPatchItem {
  content: string;
  imgUrls: string[];
  postId: number;
  tag: string;
}

//단일 게시글 불러오기
export interface ListResponse extends Response {
  data: ListItem;
}

//전체 게시글 불러오기
export interface ListItemResponse extends Response {
  data: ListItem[];
}

export interface PostSubmitType {
  content: string;
  imgUrls: string[];
  tag: string;
}

export interface TagType {
  tag: string;
}

export interface KeyWordType {
  keyword: string;
}
