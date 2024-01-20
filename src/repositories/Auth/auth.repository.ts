import axios from "axios";
import { LoginResponse } from "@/src/types/Login/login.type";

class AuthRepository {
  public async login({ code }: { code: string }): Promise<LoginResponse> {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/code`,
      {
        code,
      }
    );
    return data;
  }
}

export default new AuthRepository();
