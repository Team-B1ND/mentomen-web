import { ToastContainerProps, ToastContainer } from "react-toastify";

export const MenToMenToastContainer = ({
  ...toastContainerProps
}: ToastContainerProps) => {
  return <ToastContainer {...toastContainerProps} />;
};
