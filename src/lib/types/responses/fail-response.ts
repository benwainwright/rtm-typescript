export interface FailResponse {
  rsp: {
    stat: "fail";
    err: {
      code: number;
      msg: string;
    };
  };
}
