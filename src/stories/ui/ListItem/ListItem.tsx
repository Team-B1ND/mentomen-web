import styled from "styled-components";
import type { PostItemType } from "../../core";
import { Flex } from "../../layout";
import { ListItemProfile } from "./ListItemProfile/ListItmeProfile";
import { ListItemContent } from "./ListtItemContent/ListtItemContent";

export const ListItem = ({ data }: { data: PostItemType }) => {
  return (
    <ArticleContainer>
      <ListItemProfile {...data} />
      <ListItemContent {...data} />
    </ArticleContainer>
  );
};

const ArticleContainer = styled.article`
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 0 13px 10px;

  ${Flex({
    flexDirection: "column",
  })}
`;
