import { Response } from "../util/response.type";

export interface ListItem {
  author: number;
  content: string;
  createDateTime: number;
  imgUrls: [string];
  postId: number;
  profileUrl: string;
  stdInfo: {
    grade: number;
    number: number;
    room: number;
  };
  tag: string;
  updateDateTime: number;
  updateStatus: string;
  userName: string;
}

export interface ListResponse extends Response {
  data: ListItem[];
}
