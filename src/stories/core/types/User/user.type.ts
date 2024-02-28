import { ResponseType } from "../common/common.type";

export interface UserInfo {
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
}

export interface UserResponse extends ResponseType {
  data: UserInfo;
}

export type UserRole = "ADMIN" | "STUDENT";
