import { useQuery } from "react-query";
import listRepository from "../../repository/list/list.repository";

export function useGetList() {
  return useQuery(["list/useGetList"], () => listRepository.getList());
}
