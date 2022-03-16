/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "ts_nocheck=false"
// @generated from file buf/alpha/module/v1alpha1/module.proto (package buf.alpha.module.v1alpha1, syntax proto3)
//
// Copyright 2020-2022 Buf Technologies, Inc.
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

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import { Message, Timestamp, proto3 } from "@bufbuild/protobuf";
import { Config } from "../../breaking/v1/config_pb.js";
import { Config as Config$1 } from "../../lint/v1/config_pb.js";

/**
 * Module is a module.
 *
 * @generated from message buf.alpha.module.v1alpha1.Module
 */
export class Module extends Message<Module> {
  /**
   * files are the files that make up the set.
   *
   * Sorted by path.
   * Path must be unique.
   * Only the target files. No imports.
   *
   * Maximum total size of all content: 32MB.
   *
   * @generated from field: repeated buf.alpha.module.v1alpha1.ModuleFile files = 1;
   */
  files: ModuleFile[] = [];

  /**
   * dependencies are the dependencies.
   *
   * @generated from field: repeated buf.alpha.module.v1alpha1.ModulePin dependencies = 2;
   */
  dependencies: ModulePin[] = [];

  /**
   * documentation is the string representation of the contents of the `buf.md` file.
   *
   * string is used to enforce UTF-8 encoding or 7-bit ASCII text.
   *
   * @generated from field: string documentation = 3;
   */
  documentation = "";

  /**
   * breaking_config is the breaking change detection configuration set for the module.
   *
   * @generated from field: buf.alpha.breaking.v1.Config breaking_config = 4;
   */
  breakingConfig?: Config;

  /**
   * lint_config is the lint configuration set for the module.
   *
   * @generated from field: buf.alpha.lint.v1.Config lint_config = 5;
   */
  lintConfig?: Config$1;

  constructor(data?: PartialMessage<Module>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.module.v1alpha1.Module";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "files", kind: "message", T: ModuleFile, repeated: true },
    {
      no: 2,
      name: "dependencies",
      kind: "message",
      T: ModulePin,
      repeated: true,
    },
    {
      no: 3,
      name: "documentation",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
    },
    { no: 4, name: "breaking_config", kind: "message", T: Config },
    { no: 5, name: "lint_config", kind: "message", T: Config$1 },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): Module {
    return new Module().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): Module {
    return new Module().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): Module {
    return new Module().fromJsonString(jsonString, options);
  }

  static equals(
    a: Module | PlainMessage<Module> | undefined,
    b: Module | PlainMessage<Module> | undefined
  ): boolean {
    return proto3.util.equals(Module, a, b);
  }
}

/**
 * ModuleFile is a file within a FileSet.
 *
 * @generated from message buf.alpha.module.v1alpha1.ModuleFile
 */
export class ModuleFile extends Message<ModuleFile> {
  /**
   * path is the relative path of the file.
   * Path can only use '/' as the separator character, and includes no ".." components.
   *
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * content is the content of the file.
   *
   * @generated from field: bytes content = 2;
   */
  content = new Uint8Array(0);

  constructor(data?: PartialMessage<ModuleFile>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.module.v1alpha1.ModuleFile";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "content", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ModuleFile {
    return new ModuleFile().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ModuleFile {
    return new ModuleFile().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ModuleFile {
    return new ModuleFile().fromJsonString(jsonString, options);
  }

  static equals(
    a: ModuleFile | PlainMessage<ModuleFile> | undefined,
    b: ModuleFile | PlainMessage<ModuleFile> | undefined
  ): boolean {
    return proto3.util.equals(ModuleFile, a, b);
  }
}

/**
 * ModuleReference is a module reference.
 *
 * @generated from message buf.alpha.module.v1alpha1.ModuleReference
 */
export class ModuleReference extends Message<ModuleReference> {
  /**
   * @generated from field: string remote = 1;
   */
  remote = "";

  /**
   * @generated from field: string owner = 2;
   */
  owner = "";

  /**
   * @generated from field: string repository = 3;
   */
  repository = "";

  /**
   * either branch, tag, or commit
   *
   * @generated from field: string reference = 4;
   */
  reference = "";

  constructor(data?: PartialMessage<ModuleReference>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.module.v1alpha1.ModuleReference";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "remote", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "repository", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "reference", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ModuleReference {
    return new ModuleReference().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ModuleReference {
    return new ModuleReference().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ModuleReference {
    return new ModuleReference().fromJsonString(jsonString, options);
  }

  static equals(
    a: ModuleReference | PlainMessage<ModuleReference> | undefined,
    b: ModuleReference | PlainMessage<ModuleReference> | undefined
  ): boolean {
    return proto3.util.equals(ModuleReference, a, b);
  }
}

/**
 * ModulePin is a module pin.
 *
 * @generated from message buf.alpha.module.v1alpha1.ModulePin
 */
export class ModulePin extends Message<ModulePin> {
  /**
   * @generated from field: string remote = 1;
   */
  remote = "";

  /**
   * @generated from field: string owner = 2;
   */
  owner = "";

  /**
   * @generated from field: string repository = 3;
   */
  repository = "";

  /**
   * @generated from field: string branch = 4;
   */
  branch = "";

  /**
   * @generated from field: string commit = 5;
   */
  commit = "";

  /**
   * @generated from field: string digest = 6;
   */
  digest = "";

  /**
   * @generated from field: google.protobuf.Timestamp create_time = 7;
   */
  createTime?: Timestamp;

  constructor(data?: PartialMessage<ModulePin>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.module.v1alpha1.ModulePin";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "remote", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "repository", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "branch", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "commit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "digest", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "create_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ModulePin {
    return new ModulePin().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ModulePin {
    return new ModulePin().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ModulePin {
    return new ModulePin().fromJsonString(jsonString, options);
  }

  static equals(
    a: ModulePin | PlainMessage<ModulePin> | undefined,
    b: ModulePin | PlainMessage<ModulePin> | undefined
  ): boolean {
    return proto3.util.equals(ModulePin, a, b);
  }
}