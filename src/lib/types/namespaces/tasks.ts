import { ApiMethods } from "..";

/**
 * Parameters that can be sent with rtm.tasks.getList
 *
 * @public
 */
export interface GetListParams {
  /**
   * The id of the list to perform an action on.
   */
  list_id?: string;

  /**
   * If specified, only tasks matching the desired criteria are returned. See here for more details.
   */
  filter?: string;

  /**
   * An ISO 8601 formatted time value. If last_sync is provided, only tasks modified since last_sync will be returned, and each element will have an attribute, current, equal to last_sync.
   */
  last_sync?: string;

  /**
   * Optional callback to wrap JSON response in
   */
  callback?: string;
}

/**
 * API methods related to tasks
 *
 * @public
 */
export interface Tasks {
  /**
   * Retrieves a list of tasks.
   *
   * If list_id is not specified, all tasks are retrieved, unless filter is specified.
   * If last_sync is provided, only tasks modified since last_sync will be returned, and each <list> element will have an attribute, current, equal to last_sync.
   *
   * @returns {@link SuccessResponse}
   * @throws {@link RtmApiFailedResponseError} if the API responds with a failure
   * @throws {@link RtmHttpError} if the API responds with a non 200 response
   */
  getList: (
    params: GetListParams,
  ) => Promise<ApiMethods["rtm.tasks.getList"]["responseArgs"]>;
}
