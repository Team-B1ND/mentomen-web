import { Response } from "../util/response.type";

export interface postCommentType {
    content:string;
    postId:number;
};

export interface getCommentType extends Response {
    data: [
        {
          commentId: number;
          content: string;
          createDateTime?: string|number;
          postId: number;
          profileUrl: string;
          stdInfo: {
            grade: number;
            number: number;
            room: number
          };
          updateDateTime?: string|number;
          userId: number;
          userName: string
        },
    ],
};