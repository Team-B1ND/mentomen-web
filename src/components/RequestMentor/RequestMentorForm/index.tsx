import RequestMentorFormTag from "./Tag";
import RequestMentorFormInput from "./Input";
import RequestMentorFormAttachImage from "./AttachImage";
import { Dispatch, RefObject, SetStateAction } from "react";
import { PostSubmitType } from "@/src/types/List/list.type";

interface Props {
  postData: PostSubmitType;
  setPostData: Dispatch<SetStateAction<PostSubmitType>>;
  existingData: PostSubmitType | null;

  imgUrl: string[];
  setImgUrl: Dispatch<SetStateAction<string[]>>;
  selectFileImage: RefObject<HTMLInputElement>;

  handleRequestMentorInputChange: (
    e: React.ChangeEvent<HTMLDivElement>
  ) => void;
  handleFileUploadClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileUploadDrop: (e: React.DragEvent<HTMLDivElement>) => void;
}

const RequestMentorForm = ({ ...hooks }: Props) => {
  return (
    <>
      <RequestMentorFormTag {...hooks} />
      <RequestMentorFormInput {...hooks} />
      <RequestMentorFormAttachImage {...hooks} />
    </>
  );
};

export default RequestMentorForm;
