import { Dispatch, SetStateAction } from "react";

export class TurnOnOffModal {
  constructor(private setState: Dispatch<SetStateAction<boolean>>) {}

  turnOnModal = () => {
    this.setState(true);
    document.body.style.overflow = "hidden";
  };

  turnOffModal = () => {
    this.setState(false);
    document.body.style.overflow = "unset";
  };
}
