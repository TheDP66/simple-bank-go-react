import { grpcService } from "../util/grpc";

export const createUser = async () => {
  try {
    const res = await grpcService().createUser({
      email: "user99@email.com",
      fullName: "User Name",
      password: "secret",
      username: "user99",
    });
    console.log("res", res);
  } catch (error) {
    console.log("error", error);
  }
};
