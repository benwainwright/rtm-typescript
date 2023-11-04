[rtm-typescript](../README.md) / SuccessResponse

# Interface: SuccessResponse\<T, M\>

A successful response from the API

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<keyof `T`, \{ `requestArgs`: `unknown` ; `responseArgs`: `unknown`  }\> |
| `M` | extends keyof `T` |

## Table of contents

### Properties

- [rsp](SuccessResponse.md#rsp)

## Properties

### rsp

• **rsp**: [`ExpandRecursively`](../README.md#expandrecursively)\<\{ `api_key?`: `string` ; `callback`: `string` ; `stat`: ``"ok"``  } & `T`[`M`][``"responseArgs"``]\>

#### Defined in

src/types/responses/success-response.ts:12
