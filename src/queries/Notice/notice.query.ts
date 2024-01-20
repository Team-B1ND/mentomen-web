import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import NoticeRepository from "@/src/repositories/Notice/notice.repository";
import { NoticeListResponse } from "@/src/types/Notice/notice.type";
import { QUERY_KEYS } from "../queryKey";

export const useGetNoticeCheck = () =>
  useQuery(QUERY_KEYS.Notice.getNoticeCheck, () =>
    NoticeRepository.getNoticeCheck()
  );

export const useGetNoticeList = (
  options?: UseQueryOptions<
    NoticeListResponse,
    AxiosError,
    NoticeListResponse,
    string
  >
): UseQueryResult<NoticeListResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.Notice.getNoticeList,
    () => NoticeRepository.getNoticeList(),
    {
      ...options,
    }
  );
