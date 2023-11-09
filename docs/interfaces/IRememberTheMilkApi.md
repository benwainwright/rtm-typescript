[rtm-typescript](../README.md) / IRememberTheMilkApi

# Interface: IRememberTheMilkApi

This is the public API surface for this package. At the present time it only exposes a small number of methods from the RTM API; in future it will be comprehensive.

**`Example`**

```TypeScript
const { frob } = await client.auth.getFrob()
```

## Table of contents

### Properties

- [auth](IRememberTheMilkApi.md#auth)
- [getAuthUrl](IRememberTheMilkApi.md#getauthurl)
- [tasks](IRememberTheMilkApi.md#tasks)
- [test](IRememberTheMilkApi.md#test)

## Properties

### auth

• **auth**: [`Auth`](Auth.md)

Methods attached to the rtm.auth namespace

#### Defined in

[src/lib/types/i-remember-the-milk-api.ts:17](https://github.com/benwainwright/rtm-typescript/blob/57c8754/src/lib/types/i-remember-the-milk-api.ts#L17)

___

### getAuthUrl

• **getAuthUrl**: (`frob?`: `string`) => `string`

#### Type declaration

▸ (`frob?`): `string`

Return a valid authentication URL for the RTM API

##### Parameters

| Name | Type |
| :------ | :------ |
| `frob?` | `string` |

##### Returns

`string`

A URL in the form of a string

**`See`**

[RTM Api Documentation](https://www.rememberthemilk.com/services/api/authentication.rtm) for more information

#### Defined in

[src/lib/types/i-remember-the-milk-api.ts:36](https://github.com/benwainwright/rtm-typescript/blob/57c8754/src/lib/types/i-remember-the-milk-api.ts#L36)

___

### tasks

• **tasks**: [`Tasks`](Tasks.md)

Methods attached to the rtm.tasks namespace

#### Defined in

[src/lib/types/i-remember-the-milk-api.ts:22](https://github.com/benwainwright/rtm-typescript/blob/57c8754/src/lib/types/i-remember-the-milk-api.ts#L22)

___

### test

• **test**: [`Test`](Test.md)

Methods attached to the rtm.test namespace

#### Defined in

[src/lib/types/i-remember-the-milk-api.ts:27](https://github.com/benwainwright/rtm-typescript/blob/57c8754/src/lib/types/i-remember-the-milk-api.ts#L27)
