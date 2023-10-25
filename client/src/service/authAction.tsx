import { serverService } from "../util/server";

export const loginUser = async () => {
  try {
    const res = await serverService().loginUser({
      username: "user99",
      password: "secret",
    });

    console.log("res", res);
  } catch (err) {
    console.log("err", err);
  }
};
