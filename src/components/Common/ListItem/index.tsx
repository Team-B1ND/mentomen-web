import { useNavigate } from "react-router-dom";
import { ListItemType } from "../../../types/List/list.type";
import { uploadDateTime } from "../../../util/Date/uploadDateTime";
import aprofile from "../../../assets/images/aprofile.png";
import commentBt from "../../../assets/images/CommentBt.png";
import * as S from "./style";
import Slider from "react-slick";
import { useSlideSettings } from "../../../types/Slide/slide.type";
import { getTag } from "../../../util/Tag/getTag";

interface Props {
  data: ListItemType;
}

export default function ListItem({ data }: Props) {
  const navigate = useNavigate();

  return <div></div>;
}
