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

export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};
