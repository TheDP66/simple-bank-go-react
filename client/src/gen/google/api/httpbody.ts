// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "google/api/httpbody.proto" (package "google.api", syntax proto3)
// tslint:disable
//
// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
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
import { Any } from "../protobuf/any";
/**
 * Message that represents an arbitrary HTTP body. It should only be used for
 * payload formats that can't be represented as JSON, such as raw binary or
 * an HTML page.
 *
 *
 * This message can be used both in streaming and non-streaming API methods in
 * the request as well as the response.
 *
 * It can be used as a top-level request field, which is convenient if one
 * wants to extract parameters from either the URL or HTTP template into the
 * request fields and also want access to the raw HTTP body.
 *
 * Example:
 *
 *     message GetResourceRequest {
 *       // A unique request id.
 *       string request_id = 1;
 *
 *       // The raw HTTP body is bound to this field.
 *       google.api.HttpBody http_body = 2;
 *
 *     }
 *
 *     service ResourceService {
 *       rpc GetResource(GetResourceRequest)
 *         returns (google.api.HttpBody);
 *       rpc UpdateResource(google.api.HttpBody)
 *         returns (google.protobuf.Empty);
 *
 *     }
 *
 * Example with streaming methods:
 *
 *     service CaldavService {
 *       rpc GetCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *       rpc UpdateCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *
 *     }
 *
 * Use of this type only changes how the request and response bodies are
 * handled, all other features will continue to work unchanged.
 *
 * @generated from protobuf message google.api.HttpBody
 */
export interface HttpBody {
    /**
     * The HTTP Content-Type header value specifying the content type of the body.
     *
     * @generated from protobuf field: string content_type = 1;
     */
    contentType: string;
    /**
     * The HTTP request/response body as raw binary.
     *
     * @generated from protobuf field: bytes data = 2;
     */
    data: Uint8Array;
    /**
     * Application specific response metadata. Must be set in the first response
     * for streaming APIs.
     *
     * @generated from protobuf field: repeated google.protobuf.Any extensions = 3;
     */
    extensions: Any[];
}
// @generated message type with reflection information, may provide speed optimized methods
class HttpBody$Type extends MessageType<HttpBody> {
    constructor() {
        super("google.api.HttpBody", [
            { no: 1, name: "content_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "extensions", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Any }
        ]);
    }
    create(value?: PartialMessage<HttpBody>): HttpBody {
        const message = { contentType: "", data: new Uint8Array(0), extensions: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HttpBody>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HttpBody): HttpBody {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string content_type */ 1:
                    message.contentType = reader.string();
                    break;
                case /* bytes data */ 2:
                    message.data = reader.bytes();
                    break;
                case /* repeated google.protobuf.Any extensions */ 3:
                    message.extensions.push(Any.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: HttpBody, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string content_type = 1; */
        if (message.contentType !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.contentType);
        /* bytes data = 2; */
        if (message.data.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.data);
        /* repeated google.protobuf.Any extensions = 3; */
        for (let i = 0; i < message.extensions.length; i++)
            Any.internalBinaryWrite(message.extensions[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message google.api.HttpBody
 */
export const HttpBody = new HttpBody$Type();
