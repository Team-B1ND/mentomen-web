import { useMutation, useQuery } from "react-query";
import ListRepository from "../../repository/list/list.repository";
import { ParamType } from "../../types/param/param.type";
import { PostSubmitType } from "../../types/list/list.type";
import { TagType, KeyWordType } from "../../types/list/list.type"; 

export const useGetList = () => {
  return useQuery(["list/useGetList"], () => ListRepository.getList());
};

export const useGetApost = ({ postId }: ParamType) =>
  useQuery(
    ["post/read-one", postId],
    () => ListRepository.getPostById({ postId }),
    {
      staleTime: 60,
      cacheTime: 60,
    }
  );

export const usePostMySubmit = () => {
  const mutation = useMutation("/post/submit", (data: PostSubmitType) =>
    ListRepository.postMySubmit(data)
  );
  return mutation;
};

export const useGetTag = ({ tag }: TagType) =>
  useQuery(["post/GetTagQuery", tag], () => ListRepository.getPostByTag({ tag }), {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60,
  });

export const useGetKeyWord = ({keyword}:KeyWordType) => 
  useQuery(['search/keyword',keyword], () => ListRepository.getPostByKeyWord({ keyword }),{
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60,
  });
