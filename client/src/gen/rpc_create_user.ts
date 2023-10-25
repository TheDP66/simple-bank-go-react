// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "rpc_create_user.proto" (package "pb", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { User } from "./user";
/**
 * @generated from protobuf message pb.CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     * @generated from protobuf field: string username = 1;
     */
    username: string;
    /**
     * @generated from protobuf field: string full_name = 2;
     */
    fullName: string;
    /**
     * @generated from protobuf field: string email = 3;
     */
    email: string;
    /**
     * @generated from protobuf field: string password = 4;
     */
    password: string;
}
/**
 * @generated from protobuf message pb.CreateUserResponse
 */
export interface CreateUserResponse {
    /**
     * @generated from protobuf field: pb.User user = 1;
     */
    user?: User;
}
// @generated message type with reflection information, may provide speed optimized methods
class CreateUserRequest$Type extends MessageType<CreateUserRequest> {
    constructor() {
        super("pb.CreateUserRequest", [
            { no: 1, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "full_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "password", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CreateUserRequest>): CreateUserRequest {
        const message = { username: "", fullName: "", email: "", password: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateUserRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateUserRequest): CreateUserRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string username */ 1:
                    message.username = reader.string();
                    break;
                case /* string full_name */ 2:
                    message.fullName = reader.string();
                    break;
                case /* string email */ 3:
                    message.email = reader.string();
                    break;
                case /* string password */ 4:
                    message.password = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateUserRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string username = 1; */
        if (message.username !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.username);
        /* string full_name = 2; */
        if (message.fullName !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.fullName);
        /* string email = 3; */
        if (message.email !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.email);
        /* string password = 4; */
        if (message.password !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.password);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message pb.CreateUserRequest
 */
export const CreateUserRequest = new CreateUserRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateUserResponse$Type extends MessageType<CreateUserResponse> {
    constructor() {
        super("pb.CreateUserResponse", [
            { no: 1, name: "user", kind: "message", T: () => User }
        ]);
    }
    create(value?: PartialMessage<CreateUserResponse>): CreateUserResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateUserResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateUserResponse): CreateUserResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* pb.User user */ 1:
                    message.user = User.internalBinaryRead(reader, reader.uint32(), options, message.user);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateUserResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* pb.User user = 1; */
        if (message.user)
            User.internalBinaryWrite(message.user, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message pb.CreateUserResponse
 */
export const CreateUserResponse = new CreateUserResponse$Type();