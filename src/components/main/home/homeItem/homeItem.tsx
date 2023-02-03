import {
  CommentImg,
  ListContent,
  ListStdInfo,
  ListUserInfo,
  ListUserName,
  MainListLeftSection,
  MainListSection,
  MainProfileImg,
  MainProfileSection,
} from "./homeItem.style";
import aprofile from "../../../../assets/images/aprofile.png";
import Comment from "../../../../assets/images/CommentBt.png";

function HomeItem({ data }: any) {
  return (
    <MainListSection>
      <MainListLeftSection>
        <MainProfileSection>
          <MainProfileImg
            src={data.profileUrl == null ? aprofile : data?.profileUrl}
          />
          <ListUserInfo>
            <ListUserName>{data?.userName}</ListUserName>
            <ListStdInfo>{`${data?.stdInfo.grade}학년 ${data?.stdInfo.room}반 ${data?.stdInfo.number}번`}</ListStdInfo>
          </ListUserInfo>
        </MainProfileSection>
        <ListContent>{data?.content}</ListContent>
        <CommentImg src={Comment} />
      </MainListLeftSection>
    </MainListSection>
  );
}

export default HomeItem;
