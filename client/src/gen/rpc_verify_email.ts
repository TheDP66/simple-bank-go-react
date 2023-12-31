// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "rpc_verify_email.proto" (package "pb", syntax proto3)
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
/**
 * @generated from protobuf message pb.VerifyEmailRequest
 */
export interface VerifyEmailRequest {
    /**
     * @generated from protobuf field: int64 email_id = 1;
     */
    emailId: bigint;
    /**
     * @generated from protobuf field: string secret_code = 2;
     */
    secretCode: string;
}
/**
 * @generated from protobuf message pb.VerifyEmailResponse
 */
export interface VerifyEmailResponse {
    /**
     * @generated from protobuf field: bool is_verified = 1;
     */
    isVerified: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class VerifyEmailRequest$Type extends MessageType<VerifyEmailRequest> {
    constructor() {
        super("pb.VerifyEmailRequest", [
            { no: 1, name: "email_id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "secret_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<VerifyEmailRequest>): VerifyEmailRequest {
        const message = { emailId: 0n, secretCode: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VerifyEmailRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VerifyEmailRequest): VerifyEmailRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 email_id */ 1:
                    message.emailId = reader.int64().toBigInt();
                    break;
                case /* string secret_code */ 2:
                    message.secretCode = reader.string();
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
    internalBinaryWrite(message: VerifyEmailRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 email_id = 1; */
        if (message.emailId !== 0n)
            writer.tag(1, WireType.Varint).int64(message.emailId);
        /* string secret_code = 2; */
        if (message.secretCode !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.secretCode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message pb.VerifyEmailRequest
 */
export const VerifyEmailRequest = new VerifyEmailRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VerifyEmailResponse$Type extends MessageType<VerifyEmailResponse> {
    constructor() {
        super("pb.VerifyEmailResponse", [
            { no: 1, name: "is_verified", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<VerifyEmailResponse>): VerifyEmailResponse {
        const message = { isVerified: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VerifyEmailResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VerifyEmailResponse): VerifyEmailResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_verified */ 1:
                    message.isVerified = reader.bool();
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
    internalBinaryWrite(message: VerifyEmailResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool is_verified = 1; */
        if (message.isVerified !== false)
            writer.tag(1, WireType.Varint).bool(message.isVerified);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message pb.VerifyEmailResponse
 */
export const VerifyEmailResponse = new VerifyEmailResponse$Type();
