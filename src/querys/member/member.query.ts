import { useQuery } from "react-query";
import userRepositroy from "../../repository/user/user.repository";

export const useGetMember = () =>
  useQuery(["member/useGetMember"], () => userRepositroy.getUser(),{
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });