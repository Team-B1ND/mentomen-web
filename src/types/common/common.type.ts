import { ReactNode } from "react";

export type PropsWithChildren<P = unknown> = P & { children: ReactNode };

export interface ResponseType {
  status: number;
  message: string;
}
