import { ACCESS_TOKEN_KEY } from "@/src/constants/Auth/auth.constant";
import type {
  NoticeCheckResponse,
  NoticeListResponse,
} from "@/src/stories/core";
import { MenToMenAxios } from "@/src/libs/Axios/MenToMenAxios";
import token from "@/src/libs/token/token";

export const NotificationApi = {
  getNoticeCheck: async (): Promise<NoticeCheckResponse | void> => {
    if (token.getCookie(ACCESS_TOKEN_KEY) !== undefined) {
      const { data } = await MenToMenAxios.get("/notice/check");
      return data;
    }
    return;
  },

  getNoticeList: async (): Promise<NoticeListResponse> => {
    const { data } = await MenToMenAxios.get("/notice/list");
    return data;
  },
};
