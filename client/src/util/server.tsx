import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { SimpleBankClient } from "../gen/service_simple_bank.client";

export const serverService = () => {
  const transport = new GrpcWebFetchTransport({
    baseUrl: "/grpc",
  });
  return new SimpleBankClient(transport);
};
