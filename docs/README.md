rtm-typescript

# rtm-typescript

## Table of contents

### Enumerations

- [ClientPermissions](enums/ClientPermissions.md)

### Classes

- [RtmApiFailedResponseError](classes/RtmApiFailedResponseError.md)
- [RtmHttpError](classes/RtmHttpError.md)
- [RtmTypescriptError](classes/RtmTypescriptError.md)

### Interfaces

- [Auth](interfaces/Auth.md)
- [CheckTokenParams](interfaces/CheckTokenParams.md)
- [GetListParams](interfaces/GetListParams.md)
- [GetTokenParams](interfaces/GetTokenParams.md)
- [IRememberTheMilkApi](interfaces/IRememberTheMilkApi.md)
- [SuccessResponse](interfaces/SuccessResponse.md)
- [Tasks](interfaces/Tasks.md)
- [Test](interfaces/Test.md)

### Type Aliases

- [ExpandRecursively](README.md#expandrecursively)

### Functions

- [initialiseApi](README.md#initialiseapi)

## Type Aliases

### ExpandRecursively

Ƭ **ExpandRecursively**\<`T`\>: `T` extends `object` ? `T` extends infer O ? \{ [K in keyof O]: ExpandRecursively\<O[K]\> } : `never` : `T`

A helper type that expands types so that they resolve to their final forma
in editor tooltips

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/expand-recursively.ts:7](https://github.com/benwainwright/rtm-typescript/blob/3311c46/src/types/expand-recursively.ts#L7)

## Functions

### initialiseApi

▸ **initialiseApi**(`key`, `secret`, `permissions`, `token?`): [`IRememberTheMilkApi`](interfaces/IRememberTheMilkApi.md)

Entry point to the API. Calling it with valid credentials will initialise and return an instantiated [IRememberTheMilkApi](interfaces/IRememberTheMilkApi.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Remember the Milk API key |
| `secret` | `string` | Remember the Milk API shared secret |
| `permissions` | [`ClientPermissions`](enums/ClientPermissions.md) | What permissions your client needs access to on the API |
| `token?` | `string` | Previously authenticated request token |

#### Returns

[`IRememberTheMilkApi`](interfaces/IRememberTheMilkApi.md)

#### Defined in

[src/lib/core/initialise-api.ts:14](https://github.com/benwainwright/rtm-typescript/blob/3311c46/src/lib/core/initialise-api.ts#L14)
