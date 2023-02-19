import { Response } from "../util/response.type"

export interface PostsType extends Response{
    data: [
        {
            author?: number,
            content:string,
            createDateTime?:string|number,
            imgUrls: [
                string
            ],
            postId: number,
            profileUrl:string,
            stdInfo: {
                grade: number,
                number: number,
                room: number
            },
            tag:string,
            updateDateTime?:string|number,
            updateStatus?:string|number,
            userName?:string
        },
    ]
}