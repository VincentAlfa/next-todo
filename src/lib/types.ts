import { post } from "@prisma/client";

export type responseData = {
  data?: post | post[] | null;
  message: string;
  status: number;
};

export type paramsProps = {
  params: {
    id : string
  }
}