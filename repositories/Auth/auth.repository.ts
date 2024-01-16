import axios from "axios";
import CONFIG from "@/config/config.json";
import { LoginResponse } from "@/types/Login/login.type";

class AuthRepository {
  public async login({ code }: { code: string }): Promise<LoginResponse> {
    const { data } = await axios.post(`${CONFIG.server}/auth/code`, {
      code,
    });
    return data;
  }
}

export default new AuthRepository();
