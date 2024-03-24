import cookie from "js-cookie";

class Token {
  public getCookie(key: string): string | undefined {
    return cookie.get(key);
  }

  public setCookie(key: string, value: string): void {
    cookie.set(key, value);
  }

  public removeCookie(key: string): void {
    cookie.remove(key);
  }
}

export default new Token();
