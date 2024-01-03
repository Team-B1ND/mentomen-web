import { ResponseType } from "../common/common.type";

export interface FileResponse extends ResponseType {
  data: FileImgUrlType[];
}

export interface FileImgUrlType {
  imgUrl: string;
}
