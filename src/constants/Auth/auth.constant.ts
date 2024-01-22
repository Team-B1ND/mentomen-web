export const REQUEST_TOKEN_KEY = "Authorization" as const;
export const ACCESS_TOKEN_KEY = "access-token" as const;
export const REFRESH_TOKEN_KEY = "refresh-token" as const;

export const DAUTH_URL = `http://dauth.b1nd.com/login?client_id=${process.env.NEXT_PUBLIC_DAUTH_CLIENT_ID}&redirect_uri=http://localhost:3000/callback`;

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
