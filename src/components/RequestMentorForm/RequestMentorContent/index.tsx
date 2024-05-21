import RequestMentorFormTag from "./Tag";
import RequestMentorFormInput from "./Input";
import RequestMentorFormAttachImage from "./AttachImage";
import { Dispatch, RefObject, SetStateAction } from "react";
import { PostSubmitType } from "@/src/stories/core";

interface Props {
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
  existingData: PostSubmitType | null;
  isRequestImage: boolean;

  imgUrl: string[];
  setImgUrl: Dispatch<SetStateAction<string[]>>;
  selectFileImage: RefObject<HTMLInputElement>;

  handleRequestMentorInputChange: (
    e: React.ChangeEvent<HTMLDivElement>
  ) => void;
  handleFileUploadClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileUploadDrop: (e: React.DragEvent<HTMLDivElement>) => void;
}

const RequestMentorContent = ({ ...hooks }: Props) => {
  return (
    <>
      <RequestMentorFormTag {...hooks} />
      <RequestMentorFormInput {...hooks} />
      <RequestMentorFormAttachImage {...hooks} />
    </>
  );
};

export default RequestMentorContent;
