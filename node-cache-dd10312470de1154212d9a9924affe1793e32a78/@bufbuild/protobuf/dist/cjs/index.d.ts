export { proto3 } from "./proto3.js";
export { proto2 } from "./proto2.js";
export { protoDouble } from "./proto-double.js";
export { protoInt64 } from "./proto-int64.js";
export { protoBase64 } from "./proto-base64.js";
export { protoDelimited } from "./proto-delimited.js";
export { codegenInfo } from "./codegen-info.js";
export { Message } from "./message.js";
export type { AnyMessage, PartialMessage, PlainMessage } from "./message.js";
export { isMessage } from "./is-message.js";
export type { FieldInfo, OneofInfo } from "./field.js";
export type { FieldList } from "./field-list.js";
export { LongType, ScalarType } from "./scalar.js";
export type { ScalarValue } from "./scalar.js";
export type { MessageType } from "./message-type.js";
export type { EnumType, EnumValueInfo } from "./enum.js";
export type { Extension } from "./extension.js";
export { getExtension, setExtension, hasExtension, clearExtension, } from "./extension-accessor.js";
export type { ServiceType, MethodInfo, MethodInfoUnary, MethodInfoServerStreaming, MethodInfoClientStreaming, MethodInfoBiDiStreaming, } from "./service-type.js";
export { MethodKind, MethodIdempotency } from "./service-type.js";
export { WireType, BinaryWriter, BinaryReader } from "./binary-encoding.js";
export type { IBinaryReader, IBinaryWriter } from "./binary-encoding.js";
export type { BinaryFormat, BinaryWriteOptions, BinaryReadOptions, } from "./binary-format.js";
export type { JsonFormat, JsonObject, JsonValue, JsonReadOptions, JsonWriteOptions, JsonWriteStringOptions, } from "./json-format.js";
export type { DescriptorSet, AnyDesc, DescFile, DescEnum, DescEnumValue, DescMessage, DescOneof, DescField, DescService, DescMethod, DescExtension, DescComments, } from "./descriptor-set.js";
export { createDescriptorSet } from "./create-descriptor-set.js";
export type { IMessageTypeRegistry, IExtensionRegistry, } from "./type-registry.js";
export { createRegistry } from "./create-registry.js";
export { createRegistryFromDescriptors } from "./create-registry-from-desc.js";
export { toPlainMessage } from "./to-plain-message.js";
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
