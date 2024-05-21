import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { NoticeListResponse, QUERY_KEYS } from "@/src/stories/core";
import { NotificationApi } from "./notification.api";

export const useGetNoticeCheckQuery = () =>
  useQuery(
    QUERY_KEYS.Notice.getNoticeCheck,
    () => NotificationApi.getNoticeCheck(),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
    }
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
    () => NotificationApi.getNoticeList(),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
      ...options,
    }
  );
