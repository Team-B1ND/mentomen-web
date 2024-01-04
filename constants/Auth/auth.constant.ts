import CONFIG from "@/config/config.json";

export const REQUEST_TOKEN_KEY = "Authorization" as const;
export const ACCESS_TOKEN_KEY = "access-token" as const;
export const REFRESH_TOKEN_KEY = "refresh-token" as const;

export const DAUTH_URL = `http://dauth.b1nd.com/login?client_id=${CONFIG.CLIENTID}&redirect_uri=http://localhost:3000/callback`;
