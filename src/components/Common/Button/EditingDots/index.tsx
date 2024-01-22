import React, { useState } from "react";
import { RxDotsVertical } from "react-icons/rx";
import styled, { CSSObject } from "styled-components";
import PostSetting from "../PostSetting";
import Portal from "@/src/components/Modal/Portal";
import { ListItemType } from "@/src/types/List/list.type";

interface Props {
  onClick?: () => void;
  customStyle?: CSSObject;
  listItemData: ListItemType;
}

const EditingDots = ({ onClick, customStyle, listItemData }: Props) => {
  const [isActivePostSetting, setIsActivePostSetting] = useState(false);
  return (
    <>
      <DotsIcon
        postsetting={isActivePostSetting.toString()}
        customstyle={customStyle}
        onClick={() => {
          setIsActivePostSetting(true);
          onClick && onClick();
        }}
      />

      {isActivePostSetting && (
        <Portal>
          <PostSetting
            setIsActivePostSetting={setIsActivePostSetting}
            listItemData={listItemData}
          />
        </Portal>
      )}
    </>
  );
};

export default EditingDots;

const DotsIcon = styled(RxDotsVertical)<{
  postsetting: string;
  customstyle?: CSSObject;
}>`
  width: 23px;
  height: 23px;

  border-radius: 20px;
  padding: 3px;
  cursor: pointer;

  transform: scale(1);
  transition: all 0.2s ease-in-out;

  background-color: ${({ postsetting }) => postsetting === "true" && "#ddd"};

  &:active {
    background-color: #ddd;
    transform: scale(0.93);
  }

  ${({ customstyle }) => customstyle}
`;