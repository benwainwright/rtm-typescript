[rtm-typescript](../README.md) / RtmApiConfig

# Interface: RtmApiConfig

Configuration object for the API

## Table of contents

### Properties

- [key](RtmApiConfig.md#key)
- [permissions](RtmApiConfig.md#permissions)
- [secret](RtmApiConfig.md#secret)
- [throttle](RtmApiConfig.md#throttle)
- [token](RtmApiConfig.md#token)

## Properties

### key

• **key**: `string`

Remember the Milk API key

#### Defined in

src/lib/core/initialise-api.ts:14

___

### permissions

• **permissions**: [`ClientPermissions`](../enums/ClientPermissions.md)

What permissions your client needs access to on the API

#### Defined in

src/lib/core/initialise-api.ts:24

___

### secret

• **secret**: `string`

Remember the Milk API shared secret

#### Defined in

src/lib/core/initialise-api.ts:19

___

### throttle

• `Optional` **throttle**: `boolean`

Throttle requests to the API to avoid hitting rate limits

**`Default`**

```ts
true
```

#### Defined in

src/lib/core/initialise-api.ts:36

___

### token

• `Optional` **token**: `string`

Previously authenticated request token

#### Defined in

src/lib/core/initialise-api.ts:29
