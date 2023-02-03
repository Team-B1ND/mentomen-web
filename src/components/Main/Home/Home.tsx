import { useGetList } from "../../../querys/list/list.query";
import {
  ListContainer,
  ListSectionContainer,
  ListSectionWrap,
} from "./home.style";
import ListItem from "./homeItem/homeItem";
import ListProfile from "./homeProfile/homeProfile";

function Home() {
  const { data } = useGetList();

  return (
    <ListContainer>
      <ListProfile />
      <ListSectionContainer>
        <ListSectionWrap>
          {data?.data &&
            data.data.map((item, idx) => (
              <ListItem data={item} key={item.userName + " " + idx} />
            ))}
        </ListSectionWrap>
      </ListSectionContainer>
    </ListContainer>
  );
}

export default Home;
