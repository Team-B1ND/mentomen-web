import { useGetList } from "../../../querys/list/list.query";
import {
  ListContainer,
  ListSectionContainer,
  ListSectionWrap,
} from "./list.style";
import ListItem from "./listItem/listItem";
import ListProfile from "./listProfile/listProfile";

function List() {
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

export default List;
