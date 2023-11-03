[rtm-typescript](../README.md) / [Exports](../modules.md) / RtmApiFailedResponseError

# Class: RtmApiFailedResponseError

Thrown if the API returns an error response

**`See`**

[RTM Api documentation](https://www.rememberthemilk.com/services/api/response.rtm) for more information

## Hierarchy

- [`RtmTypescriptError`](RtmTypescriptError.md)

  ↳ **`RtmApiFailedResponseError`**

## Table of contents

### Constructors

- [constructor](RtmApiFailedResponseError.md#constructor)

### Properties

- [cause](RtmApiFailedResponseError.md#cause)
- [code](RtmApiFailedResponseError.md#code)
- [message](RtmApiFailedResponseError.md#message)
- [name](RtmApiFailedResponseError.md#name)
- [stack](RtmApiFailedResponseError.md#stack)
- [prepareStackTrace](RtmApiFailedResponseError.md#preparestacktrace)
- [stackTraceLimit](RtmApiFailedResponseError.md#stacktracelimit)

### Methods

- [captureStackTrace](RtmApiFailedResponseError.md#capturestacktrace)

## Constructors

### constructor

• **new RtmApiFailedResponseError**(`code`, `message`): [`RtmApiFailedResponseError`](RtmApiFailedResponseError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `number` |
| `message` | `string` |

#### Returns

[`RtmApiFailedResponseError`](RtmApiFailedResponseError.md)

#### Overrides

[RtmTypescriptError](RtmTypescriptError.md).[constructor](RtmTypescriptError.md#constructor)

#### Defined in

src/lib/core/rtm-api-failed-response-error.ts:10

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[RtmTypescriptError](RtmTypescriptError.md).[cause](RtmTypescriptError.md#cause)

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### code

• `Readonly` **code**: `number`

#### Defined in

src/lib/core/rtm-api-failed-response-error.ts:11

___

### message

• **message**: `string`

#### Inherited from

[RtmTypescriptError](RtmTypescriptError.md).[message](RtmTypescriptError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

[RtmTypescriptError](RtmTypescriptError.md).[name](RtmTypescriptError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[RtmTypescriptError](RtmTypescriptError.md).[stack](RtmTypescriptError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1069

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[RtmTypescriptError](RtmTypescriptError.md).[prepareStackTrace](RtmTypescriptError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[RtmTypescriptError](RtmTypescriptError.md).[stackTraceLimit](RtmTypescriptError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[RtmTypescriptError](RtmTypescriptError.md).[captureStackTrace](RtmTypescriptError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4
