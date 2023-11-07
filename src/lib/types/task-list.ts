import { TaskSeries } from "./domain-objects/task-series";

export interface TaskList {
  id: string;
  taskseries: TaskSeries[];
}
