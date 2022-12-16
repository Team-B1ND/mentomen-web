import { useQuery } from "react-query";
import userRepositroy from "../../repository/user/user.repository";

export function useGetMember() {
  return useQuery(["member/useGetMember"], () => userRepositroy.getUser());
}
