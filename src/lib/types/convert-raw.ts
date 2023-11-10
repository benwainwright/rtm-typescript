import { Task, TaskList, TaskSeries, User } from "../domain";
import { ApiMethods } from "./api-methods";
import { ConvertTypesWithin } from "./convert-types-within";
import { RawTask } from "./domain-objects/task";
import { RawTaskList } from "./domain-objects/task-list";
import { RawTaskSeries } from "./domain-objects/task-series";
import { RawUser } from "./domain-objects/user";

type WithConvertedUser = ConvertTypesWithin<ApiMethods, RawUser, typeof User>;

type WithConvertedTask = ConvertTypesWithin<
  WithConvertedUser,
  RawTask,
  typeof Task
>;

type WithConvertedTaskList = ConvertTypesWithin<
  WithConvertedTask,
  RawTaskList,
  typeof TaskList
>;

type WithConvertedTaskSeries = ConvertTypesWithin<
  WithConvertedTaskList,
  RawTaskSeries,
  typeof TaskSeries
>;

export type ConvertedTypes = WithConvertedTaskSeries;
