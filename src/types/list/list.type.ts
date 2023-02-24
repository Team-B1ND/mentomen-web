import { Response } from "../util/response.type";

export interface ListItem {
  author: number;
  content:string;
  createDateTime:string|number;
  imgUrls: [
      string
  ],
  postId: number;
  profileUrl:string;
  stdInfo: {
      grade: number;
      number: number;
      room: number
  },
  tag:string;
  updateDateTime:string|number;
  updateStatus:string|number;
  userName:string;
}

//단일 게시글 불러오기
export interface ListResponse extends Response {
  data:ListItem;
}

//전체 게시글 불러오기
export interface ListItemResponse extends Response {
  data:ListItem[];
};

export interface PostSubmitType {
  content: string;
  imgUrls: string[],
  tag: string;
}