/**
 * The Remember The Milk API has 3 permission levels.
 * A permission level is usually requested during the authentication process with the perms parameter.
 *
 * @public
 */
export enum ClientPermissions {
  /**
   * Gives the ability to read task, contact, group and list details and contents.
   */
  Read = "read",

  /**
   * Gives the ability to add and modify task, contact, group and list details and contents (also allows you to read).
   */
  Write = "write",

  /**
   *   Gives the ability to delete tasks, contacts, groups and lists (also allows you to read and write).
   */
  Delete = "delete",
}
