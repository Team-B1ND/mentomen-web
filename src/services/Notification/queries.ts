import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { NoticeListResponse } from "@/src/types/Notice/notice.type";
import { QUERY_KEYS } from "@/src/constants/Auth/auth.constant";
import NotificationApi from "./api";

export const useGetNoticeCheckQuery = () =>
  useQuery(QUERY_KEYS.Notice.getNoticeCheck, () =>
    NotificationApi.getNoticeCheckApi()
  );

export const useGetNoticeListQuery = (
  options?: UseQueryOptions<
    NoticeListResponse,
    AxiosError,
    NoticeListResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.Notice.getNoticeList,
    () => NotificationApi.getNoticeListApi(),
    {
      ...options,
    }
  );
