export type TokenModel = {
  access_token: string;
  token_type: "bearer";
};

export type TokenErrorModel = {
  detail: [
    {
      loc: [string];
      msg: string;
      type: string;
    }
  ];
};
