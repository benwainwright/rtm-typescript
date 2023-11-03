[rtm-typescript](../README.md) / [Exports](../modules.md) / RtmHttpError

# Class: RtmHttpError

Raised when the Api returns a non 200 HTTP response

## Hierarchy

- [`RtmTypescriptError`](RtmTypescriptError.md)

  ↳ **`RtmHttpError`**

## Table of contents

### Constructors

- [constructor](RtmHttpError.md#constructor)

### Properties

- [body](RtmHttpError.md#body)
- [cause](RtmHttpError.md#cause)
- [message](RtmHttpError.md#message)
- [name](RtmHttpError.md#name)
- [stack](RtmHttpError.md#stack)
- [statusCode](RtmHttpError.md#statuscode)
- [prepareStackTrace](RtmHttpError.md#preparestacktrace)
- [stackTraceLimit](RtmHttpError.md#stacktracelimit)

### Methods

- [captureStackTrace](RtmHttpError.md#capturestacktrace)

## Constructors

### constructor

• **new RtmHttpError**(`statusCode`, `body`): [`RtmHttpError`](RtmHttpError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `statusCode` | `number` |
| `body` | `string` |

#### Returns

[`RtmHttpError`](RtmHttpError.md)

#### Overrides

[RtmTypescriptError](RtmTypescriptError.md).[constructor](RtmTypescriptError.md#constructor)

#### Defined in

src/lib/core/rtm-http-error.ts:9

## Properties

### body

• `Readonly` **body**: `string`

#### Defined in

src/lib/core/rtm-http-error.ts:11

___

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[RtmTypescriptError](RtmTypescriptError.md).[cause](RtmTypescriptError.md#cause)

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

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

### statusCode

• `Readonly` **statusCode**: `number`

#### Defined in

src/lib/core/rtm-http-error.ts:10

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
