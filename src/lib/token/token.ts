import { ACCESS_KEY } from "../../constants/Auth/auth.constant";

class Token {
  public getToken(key: string): string | null {
    return localStorage.getItem(key);
  }

  public setToken(key: string, token: string): void {
    localStorage.setItem(key, token);
  }

  public clearToken() {
    localStorage.removeItem(ACCESS_KEY);
  }
}

export default new Token();
