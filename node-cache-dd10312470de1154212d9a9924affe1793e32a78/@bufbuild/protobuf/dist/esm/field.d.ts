import type { EnumType } from "./enum.js";
import type { MessageType } from "./message-type.js";
import type { LongType, ScalarType } from "./scalar.js";
/**
 * FieldInfo describes a field of a protobuf message for runtime reflection. We
 * distinguish between the following kinds of fields:
 *
 * - "scalar": string, bool, float, int32, etc. The scalar type is "T".
 * - "enum": The field was declared with an enum type. The enum type is "T".
 * - "message": The field was declared with a message type. The message type is "T".
 * - "map": The field was declared with map<K,V>. The key type is "K", the value type is "V".
 *
 * Every field always has the following properties:
 *
 * - "no": The field number of the protobuf field.
 * - "name": The original name of the protobuf field.
 * - "localName": The name of the field as used in generated code.
 * - "jsonName": The name for JSON serialization / deserialization.
 * - "opt": Whether the field is optional.
 * - "req": Whether the field is required (a legacy proto2 feature).
 * - "repeated": Whether the field is repeated.
 * - "packed": Whether the repeated field is packed.
 *
 * Additionally, fields may have the following properties:
 *
 * - "oneof": If the field is member of a oneof group.
 * - "default": Only proto2: An explicit default value.
 * - "delimited": Only proto2: Use the tag-delimited group encoding.
 */
export type FieldInfo = fiRules<fiScalar> | fiRules<fiEnum> | fiRules<fiMessage> | fiRules<fiMap>;
/**
 * Version of `FieldInfo` that allows the following properties
 * to be omitted:
 *
 * - "localName", "jsonName": can be omitted if equal to lowerCamelCase(name)
 * - "opt": Can be omitted if false.
 * - "repeated": Can be omitted if false.
 * - "packed": Can be omitted if equal to the standard packing of the field.
 */
export type PartialFieldInfo = fiPartialRules<fiScalar> | fiPartialRules<fiEnum> | fiPartialRules<fiMessage> | fiPartialRules<fiMap>;
/**
 * Provides convenient access to field information of a oneof.
 */
export interface OneofInfo {
    readonly kind: "oneof";
    readonly name: string;
    readonly localName: string;
    readonly repeated: false;
    readonly packed: false;
    readonly opt: false;
    readonly req: false;
    readonly default: undefined;
    readonly delimited?: undefined;
    readonly fields: readonly FieldInfo[];
    /**
     * Return field information by local name.
     */
    findField(localName: string): FieldInfo | undefined;
}
interface fiShared {
    /**
     * The field number of the .proto field.
     */
    readonly no: number;
    /**
     * The original name of the .proto field.
     */
    readonly name: string;
    /**
     * The name of the field as used in generated code.
     */
    readonly localName: string;
    /**
     * The name for JSON serialization / deserialization.
     */
    readonly jsonName: string;
    /**
     * The `oneof` group, if this field belongs to one.
     */
    readonly oneof?: OneofInfo | undefined;
}
interface fiScalar extends fiShared {
    readonly kind: "scalar";
    /**
     * Scalar type of the field.
     */
    readonly T: ScalarType;
    /**
     * JavaScript representation of 64 bit integral types (int64, uint64,
     * sint64, fixed64, sfixed64).
     *
     * By default, this is LongType.BIGINT. Generated code will use the BigInt
     * primitive.
     *
     * With LongType.STRING, generated code will use the String primitive instead.
     * This can be specified per field with the option `[jstype = JS_STRING]`:
     *
     * ```protobuf
     * uint64 field_a = 1; // BigInt
     * uint64 field_b = 2 [jstype = JS_NORMAL]; // BigInt
     * uint64 field_b = 2 [jstype = JS_NUMBER]; // BigInt
     * uint64 field_b = 2 [jstype = JS_STRING]; // String
     * ```
     *
     * This property is ignored for other scalar types.
     */
    readonly L: LongType;
    /**
     * Is the field repeated?
     */
    readonly repeated: boolean;
    /**
     * Is this repeated field packed?
     * BYTES and STRING can never be packed, since they are length-delimited.
     * Other types can be packed with the field option "packed".
     * For proto3, fields are packed by default.
     */
    readonly packed: boolean;
    /**
     * Is the field optional?
     */
    readonly opt: boolean;
    /**
     * Is the field required? A legacy proto2 feature.
     */
    readonly req: boolean;
    /**
     * Only proto2: An explicit default value.
     */
    readonly default: number | boolean | string | bigint | Uint8Array | undefined;
    /**
     * Serialize this message with the delimited format, also known as group
     * encoding, as opposed to the standard length prefix.
     *
     * Only valid for message fields.
     */
    readonly delimited?: undefined;
}
interface fiMessage extends fiShared {
    readonly kind: "message";
    /**
     * Message handler for the field.
     */
    readonly T: MessageType;
    /**
     * Is the field repeated?
     */
    readonly repeated: boolean;
    /**
     * Is this repeated field packed? Never true for messages.
     */
    readonly packed: false;
    /**
     * Is the field required? A legacy proto2 feature.
     */
    readonly req: boolean;
    /**
     * An explicit default value (only proto2). Never set for messages.
     */
    readonly default: undefined;
    /**
     * Serialize this message with the delimited format, also known as group
     * encoding, as opposed to the standard length prefix.
     *
     * Only valid for message fields.
     */
    readonly delimited?: boolean;
}
interface fiEnum extends fiShared {
    readonly kind: "enum";
    /**
     * Enum type information for the field.
     */
    readonly T: EnumType;
    /**
     * Is the field repeated?
     */
    readonly repeated: boolean;
    /**
     * Is this repeated field packed?
     * Repeated enums can be packed with the field option "packed".
     * For proto3, they are packed by default.
     */
    readonly packed: boolean;
    /**
     * Is the field optional?
     */
    readonly opt: boolean;
    /**
     * Is the field required? A legacy proto2 feature.
     */
    readonly req: boolean;
    /**
     * Only proto2: An explicit default value.
     */
    readonly default: number | undefined;
    /**
     * Serialize this message with the delimited format, also known as group
     * encoding, as opposed to the standard length prefix.
     *
     * Only valid for message fields.
     */
    readonly delimited?: undefined;
}
interface fiMap extends fiShared {
    readonly kind: "map";
    /**
     * Map key type.
     *
     * The key_type can be any integral or string type
     * (so, any scalar type except for floating point
     * types and bytes)
     */
    readonly K: Exclude<ScalarType, ScalarType.FLOAT | ScalarType.DOUBLE | ScalarType.BYTES>;
    /**
     * Map value type. Can be scalar, enum, or message.
     */
    readonly V: {
        readonly kind: "scalar";
        readonly T: ScalarType;
    } | {
        readonly kind: "enum";
        readonly T: EnumType;
    } | {
        readonly kind: "message";
        readonly T: MessageType;
    };
    /**
     * Is the field repeated? Never true for maps.
     */
    readonly repeated: false;
    /**
     * Is this repeated field packed? Never true for maps.
     */
    readonly packed: false;
    /**
     * An explicit default value (only proto2). Never set for maps.
     */
    readonly default: undefined;
    /**
     * Serialize this message with the delimited format, also known as group
     * encoding, as opposed to the standard length prefix.
     *
     * Only valid for message fields.
     */
    readonly delimited?: undefined;
}
type fiRules<T> = Omit<T, "oneof" | "repeat" | "repeated" | "packed" | "opt" | "req"> & ({
    readonly repeated: false;
    readonly packed: false;
    readonly opt: false;
    readonly req: boolean;
    readonly oneof: undefined;
} | {
    readonly repeated: false;
    readonly packed: false;
    readonly opt: true;
    readonly req: false;
    readonly oneof: undefined;
} | {
    readonly repeated: boolean;
    readonly packed: boolean;
    readonly opt: false;
    readonly req: boolean;
    readonly oneof: undefined;
} | {
    readonly repeated: false;
    readonly packed: false;
    readonly opt: false;
    readonly req: false;
    readonly oneof: OneofInfo;
});
type fiPartialRules<T extends fiScalar | fiMap | fiEnum | fiMessage> = Omit<T, "jsonName" | "localName" | "oneof" | "repeat" | "repeated" | "packed" | "opt" | "req" | "default" | "L" | "delimited"> & ({
    readonly jsonName?: string;
    readonly repeated?: false;
    readonly packed?: false;
    readonly opt?: false;
    readonly req?: boolean;
    readonly oneof?: undefined;
    default?: T["default"];
    L?: LongType;
    delimited?: boolean;
} | {
    readonly jsonName?: string;
    readonly repeated?: false;
    readonly packed?: false;
    readonly opt: true;
    readonly req?: false;
    readonly oneof?: undefined;
    default?: T["default"];
    L?: LongType;
    delimited?: boolean;
} | {
    readonly jsonName?: string;
    readonly repeated?: boolean;
    readonly packed?: boolean;
    readonly opt?: false;
    readonly req?: boolean;
    readonly oneof?: undefined;
    default?: T["default"];
    L?: LongType;
    delimited?: boolean;
} | {
    readonly jsonName?: string;
    readonly repeated?: false;
    readonly packed?: false;
    readonly opt?: false;
    readonly req?: false;
    readonly oneof: string;
    default?: T["default"];
    L?: LongType;
    delimited?: boolean;
});
export {};
