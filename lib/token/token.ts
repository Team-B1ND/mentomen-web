import { ACCESS_KEY } from "../../constants/Auth/auth.constant";
import cookie from "js-cookie";

class Token {
  public getCookie(key: string): string | undefined {
    let item = undefined;
    if (cookie.get(key) !== undefined) {
      item = cookie.get(key);
    }
    return item;
  }

  public setCookie(key: string, value: string): void {
    cookie.set(key, value);
  }

  public removeCookie(key: string): void {
    cookie.remove(key);
  }
}

export default new Token();