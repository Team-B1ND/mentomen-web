import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface MenToMenToastType {
  success(message: string): void;
  info(message: string): void;
  error(message: string): void;
}

class MenToMenToastAdapter implements MenToMenToastType {
  success(message: string): void {
    toast.success(message, { position: toast.POSITION.TOP_RIGHT });
  }

  info(message: string): void {
    toast.info(message, { position: toast.POSITION.TOP_RIGHT });
  }

  error(message: string): void {
    toast.error(message, { position: toast.POSITION.TOP_RIGHT });
  }
}

class MenToMenToastService {
  constructor(private toastService: MenToMenToastType) {}

  public showSuccess(message: string) {
    this.toastService.success(message);
  }

  public showError(message: string) {
    this.toastService.error(message);
  }

  public showInfo(message: string) {
    this.toastService.info(message);
  }
}

export const MenToMenToast = new MenToMenToastService(
  new MenToMenToastAdapter()
);
