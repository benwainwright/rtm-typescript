[rtm-typescript](../README.md) / Auth

# Class: Auth

## Implements

- `NameSpace`\<``"auth"``\>

## Table of contents

### Constructors

- [constructor](Auth.md#constructor)

### Properties

- [client](Auth.md#client)

### Methods

- [checkToken](Auth.md#checktoken)
- [getFrob](Auth.md#getfrob)
- [getToken](Auth.md#gettoken)

## Constructors

### constructor

• **new Auth**(`client`): [`Auth`](Auth.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `RtmClient` |

#### Returns

[`Auth`](Auth.md)

#### Defined in

src/lib/namespaces/auth.ts:29

## Properties

### client

• `Private` **client**: `RtmClient`

#### Defined in

src/lib/namespaces/auth.ts:29

## Methods

### checkToken

▸ **checkToken**(`args`): `Promise`\<\{ `api_key?`: `string` ; `auth`: \{ token: string; perms: string; user: \{ id: string; username: string; fullname: string; }; } ; `callback`: `string` ; `stat`: ``"ok"``  }\>

Returns the credentials attached to an authentication token.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CheckTokenArgs`](../interfaces/CheckTokenArgs.md) |

#### Returns

`Promise`\<\{ `api_key?`: `string` ; `auth`: \{ token: string; perms: string; user: \{ id: string; username: string; fullname: string; }; } ; `callback`: `string` ; `stat`: ``"ok"``  }\>

Remember the milk API response

**`See`**

[Api Documentation](https://www.rememberthemilk.com/services/api/methods/rtm.auth.checkToken.rtm|RTM) for more information

**`Throws`**

[RtmApiFailedResponseError](RtmApiFailedResponseError.md) if the API responds with a failure

**`Throws`**

[RtmHttpError](RtmHttpError.md) if the API responds with a non 200 response

#### Implementation of

NameSpace.checkToken

#### Defined in

src/lib/namespaces/auth.ts:41

___

### getFrob

▸ **getFrob**(): `Promise`\<\{ `api_key?`: `string` ; `callback`: `string` ; `frob`: `string` ; `stat`: ``"ok"``  }\>

Returns a frob for use during authentication

#### Returns

`Promise`\<\{ `api_key?`: `string` ; `callback`: `string` ; `frob`: `string` ; `stat`: ``"ok"``  }\>

Remember the milk API response

**`See`**

[Api Documentation](https://www.rememberthemilk.com/services/api/methods/rtm.auth.getFrob.rtm|RTM) for more information

**`Throws`**

[RtmApiFailedResponseError](RtmApiFailedResponseError.md) if the API responds with a failure

**`Throws`**

[RtmHttpError](RtmHttpError.md) if the API responds with a non 200 response

#### Implementation of

NameSpace.getFrob

#### Defined in

src/lib/namespaces/auth.ts:55

___

### getToken

▸ **getToken**(`params`): `Promise`\<\{ `api_key?`: `string` ; `auth`: \{ token: string; perms: string; user: \{ id: string; username: string; fullname: string; }; } ; `callback`: `string` ; `stat`: ``"ok"``  }\>

Returns the auth token for the given frob, if one has been attached.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetTokenArgs`](../interfaces/GetTokenArgs.md) |

#### Returns

`Promise`\<\{ `api_key?`: `string` ; `auth`: \{ token: string; perms: string; user: \{ id: string; username: string; fullname: string; }; } ; `callback`: `string` ; `stat`: ``"ok"``  }\>

Remember the milk API response

**`See`**

[Api Documentation](https://www.rememberthemilk.com/services/api/methods/rtm.auth.getToken.rtm|RTM) for more information

**`Throws`**

[RtmApiFailedResponseError](RtmApiFailedResponseError.md) if the API responds with a failure

**`Throws`**

[RtmHttpError](RtmHttpError.md) if the API responds with a non 200 response

#### Implementation of

NameSpace.getToken

#### Defined in

src/lib/namespaces/auth.ts:69
