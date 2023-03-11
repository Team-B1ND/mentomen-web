import { useQuery } from "react-query";
import noticeRepository from "../../repository/notice/notice.repository";

export const useGetNoticeCheck = () =>
  useQuery("notice/check", () => noticeRepository.getNoticeCheck());

export const useGetNoticeList = () =>
  useQuery("notice/list", () => noticeRepository.getNoticeList());
