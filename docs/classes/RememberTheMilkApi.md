[rtm-typescript](../README.md) / RememberTheMilkApi

# Class: RememberTheMilkApi

This is the public API for this package. At present it only provides access to a limited number of API
methods, but in the future, you will be access the entire API surface here. At the present time, you will have to call
the correct API methods (all of which _are_ implemented) to get the the token from the API, then pass it into the fourth constructor
parameter in order to authenticate

**`Example`**

```TypeScript
import { RememberTheMilkApi, ClientPermissions } from "rtm-typescript"

// Some code

const client = new RememberTheMilkApi("my-key", "my-secret", ClientPermissions.Delete)
const { frob } = await client.auth.getFrob()
```

## Implements

- [`ApiSurface`](../README.md#apisurface)

## Table of contents

### Constructors

- [constructor](RememberTheMilkApi.md#constructor)

### Properties

- [auth](RememberTheMilkApi.md#auth)
- [client](RememberTheMilkApi.md#client)
- [tasks](RememberTheMilkApi.md#tasks)
- [test](RememberTheMilkApi.md#test)

### Methods

- [getAuthUrl](RememberTheMilkApi.md#getauthurl)

## Constructors

### constructor

• **new RememberTheMilkApi**(`key`, `secret`, `permissions`, `token?`): [`RememberTheMilkApi`](RememberTheMilkApi.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Remember the Milk API key |
| `secret` | `string` | Remember the Milk API shared secret |
| `permissions` | [`ClientPermissions`](../enums/ClientPermissions.md) | What permissions your client needs access to on the API |
| `token?` | `string` | Previously authenticated request token |

#### Returns

[`RememberTheMilkApi`](RememberTheMilkApi.md)

#### Defined in

src/lib/remember-the-milk-api.ts:50

## Properties

### auth

• **auth**: [`Auth`](Auth.md)

API methods relating to authentication

#### Implementation of

ApiSurface.auth

#### Defined in

src/lib/remember-the-milk-api.ts:30

___

### client

• `Private` **client**: `RtmClient`

#### Defined in

src/lib/remember-the-milk-api.ts:42

___

### tasks

• **tasks**: `Tasks`

API methods relating to RTM Tasks

#### Implementation of

ApiSurface.tasks

#### Defined in

src/lib/remember-the-milk-api.ts:35

___

### test

• **test**: `Test`

API methods that exist to test the API

#### Implementation of

ApiSurface.test

#### Defined in

src/lib/remember-the-milk-api.ts:40

## Methods

### getAuthUrl

▸ **getAuthUrl**(`frob?`): `string`

Return a valid authentication URL for the RTM API

#### Parameters

| Name | Type |
| :------ | :------ |
| `frob?` | `string` |

#### Returns

`string`

A URL in the form of a string

**`See`**

[RTM Api Documentation](https://www.rememberthemilk.com/services/api/authentication.rtm) for more information

#### Defined in

src/lib/remember-the-milk-api.ts:69
