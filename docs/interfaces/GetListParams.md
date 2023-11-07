[rtm-typescript](../README.md) / GetListParams

# Interface: GetListParams

Parameters that can be sent with rtm.tasks.getList

## Table of contents

### Properties

- [callback](GetListParams.md#callback)
- [filter](GetListParams.md#filter)
- [last_sync](GetListParams.md#last_sync)
- [list_id](GetListParams.md#list_id)

## Properties

### callback

• `Optional` **callback**: `string`

Optional callback to wrap JSON response in

#### Defined in

src/lib/types/namespaces/tasks.ts:28

---

### filter

• `Optional` **filter**: `string`

If specified, only tasks matching the desired criteria are returned. See here for more details.

#### Defined in

src/lib/types/namespaces/tasks.ts:18

---

### last_sync

• `Optional` **last_sync**: `string`

An ISO 8601 formatted time value. If last_sync is provided, only tasks modified since last_sync will be returned, and each element will have an attribute, current, equal to last_sync.

#### Defined in

src/lib/types/namespaces/tasks.ts:23

---

### list_id

• `Optional` **list_id**: `string`

The id of the list to perform an action on.

#### Defined in

src/lib/types/namespaces/tasks.ts:13
