// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
export { proto3 } from "./proto3.js";
export { proto2 } from "./proto2.js";
export { protoDouble } from "./proto-double.js";
export { protoInt64 } from "./proto-int64.js";
export { protoBase64 } from "./proto-base64.js";
export { protoDelimited } from "./proto-delimited.js";
export { codegenInfo } from "./codegen-info.js";
export { Message } from "./message.js";
export { isMessage } from "./is-message.js";
export { LongType, ScalarType } from "./scalar.js";
export { getExtension, setExtension, hasExtension, clearExtension, } from "./extension-accessor.js";
export { MethodKind, MethodIdempotency } from "./service-type.js";
export { WireType, BinaryWriter, BinaryReader } from "./binary-encoding.js";
export { createDescriptorSet } from "./create-descriptor-set.js";
export { createRegistry } from "./create-registry.js";
export { createRegistryFromDescriptors } from "./create-registry-from-desc.js";
export { toPlainMessage } from "./to-plain-message.js";
// ideally, we would export these types with sub-path exports:
export * from "./google/protobuf/compiler/plugin_pb.js";
export * from "./google/protobuf/api_pb.js";
export * from "./google/protobuf/any_pb.js";
export * from "./google/protobuf/descriptor_pb.js";
export * from "./google/protobuf/duration_pb.js";
export * from "./google/protobuf/empty_pb.js";
export * from "./google/protobuf/field_mask_pb.js";
export * from "./google/protobuf/source_context_pb.js";
export * from "./google/protobuf/struct_pb.js";
export * from "./google/protobuf/timestamp_pb.js";
export * from "./google/protobuf/type_pb.js";
export * from "./google/protobuf/wrappers_pb.js";
