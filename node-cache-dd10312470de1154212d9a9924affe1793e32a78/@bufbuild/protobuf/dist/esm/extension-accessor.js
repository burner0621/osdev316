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
import { assert } from "./private/assert.js";
import { createExtensionContainer, filterUnknownFields, } from "./private/extensions.js";
/**
 * Retrieve an extension value from a message.
 *
 * The function never returns undefined. Use hasExtension() to check whether an
 * extension is set. If the extension is not set, this function returns the
 * default value (if one was specified in the protobuf source), or the zero value
 * (for example `0` for numeric types, `[]` for repeated extension fields, and
 * an empty message instance for message fields).
 *
 * Extensions are stored as unknown fields on a message. To mutate an extension
 * value, make sure to store the new value with setExtension() after mutating.
 *
 * If the extension does not extend the given message, an error is raised.
 */
export function getExtension(message, extension, options) {
    assertExtendee(extension, message);
    const opt = extension.runtime.bin.makeReadOptions(options);
    const ufs = filterUnknownFields(message.getType().runtime.bin.listUnknownFields(message), extension.field);
    const [container, get] = createExtensionContainer(extension);
    for (const uf of ufs) {
        extension.runtime.bin.readField(container, opt.readerFactory(uf.data), extension.field, uf.wireType, opt);
    }
    return get();
}
/**
 * Set an extension value on a message. If the message already has a value for
 * this extension, the value is replaced.
 *
 * If the extension does not extend the given message, an error is raised.
 */
export function setExtension(message, extension, value, options) {
    assertExtendee(extension, message);
    const readOpt = extension.runtime.bin.makeReadOptions(options);
    const writeOpt = extension.runtime.bin.makeWriteOptions(options);
    if (hasExtension(message, extension)) {
        const ufs = message
            .getType()
            .runtime.bin.listUnknownFields(message)
            .filter((uf) => uf.no != extension.field.no);
        message.getType().runtime.bin.discardUnknownFields(message);
        for (const uf of ufs) {
            message
                .getType()
                .runtime.bin.onUnknownField(message, uf.no, uf.wireType, uf.data);
        }
    }
    const writer = writeOpt.writerFactory();
    let f = extension.field;
    // Implicit presence does not apply to extensions, see https://github.com/protocolbuffers/protobuf/issues/8234
    // We patch the field info to use explicit presence:
    if (!f.opt && !f.repeated && (f.kind == "enum" || f.kind == "scalar")) {
        f = Object.assign(Object.assign({}, extension.field), { opt: true });
    }
    extension.runtime.bin.writeField(f, value, writer, writeOpt);
    const reader = readOpt.readerFactory(writer.finish());
    while (reader.pos < reader.len) {
        const [no, wireType] = reader.tag();
        const data = reader.skip(wireType);
        message.getType().runtime.bin.onUnknownField(message, no, wireType, data);
    }
}
/**
 * Remove an extension value from a message.
 *
 * If the extension does not extend the given message, an error is raised.
 */
export function clearExtension(message, extension) {
    assertExtendee(extension, message);
    if (hasExtension(message, extension)) {
        const bin = message.getType().runtime.bin;
        const ufs = bin
            .listUnknownFields(message)
            .filter((uf) => uf.no != extension.field.no);
        bin.discardUnknownFields(message);
        for (const uf of ufs) {
            bin.onUnknownField(message, uf.no, uf.wireType, uf.data);
        }
    }
}
/**
 * Check whether an extension is set on a message.
 */
export function hasExtension(message, extension) {
    const messageType = message.getType();
    return (extension.extendee.typeName === messageType.typeName &&
        !!messageType.runtime.bin
            .listUnknownFields(message)
            .find((uf) => uf.no == extension.field.no));
}
function assertExtendee(extension, message) {
    assert(extension.extendee.typeName == message.getType().typeName, `extension ${extension.typeName} can only be applied to message ${extension.extendee.typeName}`);
}
