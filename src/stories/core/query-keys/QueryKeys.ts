export const QUERY_KEYS = Object.freeze({
  Comment: {
    getComment: (postId: number) => ["comment/read", postId],
  },
  Notice: {
    getNoticeCheck: "notice/check",
    getNoticeList: "notice/list",
  },
  Post: {
    getAllPost: "list/useGetList",
    getPostById: (postId: number) => ["post/read-one", postId],
    getPostByTag: (tag: string) => ["post/GetTagQuery", tag],
    getPostByKeyWord: (keyword: string) => ["search/keyword", keyword],
  },
  User: {
    getMyInfo: "user/my",
    getMyPost: "user/post",
  },
});
