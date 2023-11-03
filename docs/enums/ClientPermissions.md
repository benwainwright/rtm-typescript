[rtm-typescript](../README.md) / [Exports](../modules.md) / ClientPermissions

# Enumeration: ClientPermissions

The Remember The Milk API has 3 permission levels.
A permission level is usually requested during the authentication process with the perms parameter.

## Table of contents

### Enumeration Members

- [Delete](ClientPermissions.md#delete)
- [Read](ClientPermissions.md#read)
- [Write](ClientPermissions.md#write)

## Enumeration Members

### Delete

• **Delete** = ``"delete"``

Gives the ability to delete tasks, contacts, groups and lists (also allows you to read and write).

#### Defined in

src/types/permissions.ts:21

___

### Read

• **Read** = ``"read"``

Gives the ability to read task, contact, group and list details and contents.

#### Defined in

src/types/permissions.ts:11

___

### Write

• **Write** = ``"write"``

Gives the ability to add and modify task, contact, group and list details and contents (also allows you to read).

#### Defined in

src/types/permissions.ts:16
