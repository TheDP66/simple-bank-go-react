// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "service_simple_bank.proto" (package "pb", syntax proto3)
// tslint:disable
import { VerifyEmailResponse } from "./rpc_verify_email";
import { VerifyEmailRequest } from "./rpc_verify_email";
import { LoginUserResponse } from "./rpc_login_user";
import { LoginUserRequest } from "./rpc_login_user";
import { UpdateUserResponse } from "./rpc_update_user";
import { UpdateUserRequest } from "./rpc_update_user";
import { CreateUserResponse } from "./rpc_create_user";
import { CreateUserRequest } from "./rpc_create_user";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
/**
 * @generated ServiceType for protobuf service pb.SimpleBank
 */
export const SimpleBank = new ServiceType("pb.SimpleBank", [
    { name: "CreateUser", options: { "google.api.http": { post: "/v1/create_user", body: "*" }, "grpc.gateway.protoc_gen_openapiv2.options.openapiv2_operation": { summary: "Create new user", description: "Use this API to create a new user" } }, I: CreateUserRequest, O: CreateUserResponse },
    { name: "UpdateUser", options: { "google.api.http": { patch: "/v1/update_user", body: "*" }, "grpc.gateway.protoc_gen_openapiv2.options.openapiv2_operation": { summary: "Update user", description: "Use this API to update user" } }, I: UpdateUserRequest, O: UpdateUserResponse },
    { name: "LoginUser", options: { "google.api.http": { post: "/v1/login_user", body: "*" }, "grpc.gateway.protoc_gen_openapiv2.options.openapiv2_operation": { summary: "Login user", description: "Use this API to login user and get access token & refresh token" } }, I: LoginUserRequest, O: LoginUserResponse },
    { name: "VerifyEmail", options: { "google.api.http": { get: "/v1/verify_email" }, "grpc.gateway.protoc_gen_openapiv2.options.openapiv2_operation": { summary: "Verify email", description: "Use this API to verify user's email address" } }, I: VerifyEmailRequest, O: VerifyEmailResponse }
]);
