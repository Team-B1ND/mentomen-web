import { UserResponse } from "../../interface/user/user.type";
import { useQuery } from "react-query";
import userRepositroy from "../../repository/user/user.repositroy";

export function useGetMember() {
  return useQuery(["member/useGetMember"], () => userRepositroy.getUser());
}
