import { useQuery } from "react-query";
import NoticeRepository from "../../repository/notice/notice.repository";

export const useGetNoticeCheck = () =>
  useQuery("notice/check", () => NoticeRepository.getNoticeCheck());

export const useGetNoticeList = () =>
  useQuery("notice/list", () => NoticeRepository.getNoticeList());
