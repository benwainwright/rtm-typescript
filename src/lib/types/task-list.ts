import { RawTaskSeries } from "./domain-objects/task-series";

export interface RawTaskList {
  id: string;
  taskseries: RawTaskSeries[];
}
