import { useQuery } from "react-query";
import UserRepositroy from "../../repository/User/user.repository";

export const useGetMember = () =>
  useQuery(["member/useGetMember"], () => UserRepositroy.getUser(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
