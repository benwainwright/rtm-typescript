import { RawTaskSeries } from "./task-series";

export interface RawTaskList {
  id: string;
  taskseries: RawTaskSeries[];
}
