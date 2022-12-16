import { Response } from "../util/response.type";

export interface UserResponse extends Response {
  data: {
    email: string;
    name: string;
    profileImage: string;
    roles: UserRole;
    stdInfo: {
      grade: number;
      number: number;
      room: number;
    };
    userId: number;
  };
}
export type UserRole = "ADMIN" | "STUDENT";
