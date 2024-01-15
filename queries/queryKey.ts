export const QUERY_KEYS = Object.freeze({
  Comment: {
    getComment: (postId: number) => ["comment/read", postId],
  },
  Notice: {
    getNoticeCheck: "notice/check",
    getNoticeList: "notice/list",
  },
  Post: {
    getList: "list/useGetList",
    getApost: (postId: number) => ["post/read-one", postId],
    getTag: (tag: string) => ["post/GetTagQuery", tag],
    getKeyWord: (keyword: string) => ["search/keyword", keyword],
  },
  User: {
    getMyInfo: "user/my",
    getMyPost: "user/post",
  },
});
