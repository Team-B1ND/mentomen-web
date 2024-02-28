import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import NotificationApi from "./api";
import { NoticeListResponse, QUERY_KEYS } from "@/src/stories/core";

export const useGetNoticeCheckQuery = () =>
  useQuery(
    QUERY_KEYS.Notice.getNoticeCheck,
    () => NotificationApi.getNoticeCheckApi(),
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
    () => NotificationApi.getNoticeListApi(),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 60,
      ...options,
    }
  );
