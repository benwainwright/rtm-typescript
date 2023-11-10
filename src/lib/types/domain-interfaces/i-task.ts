import { TaskPriority } from "../task-priority";
import { ITaskSeries } from "./i-task-series";

export interface ITask {
  readonly completed: Date | undefined;
  readonly id: string;
  readonly due: Date | undefined;
  readonly added: Date | undefined;
  readonly deleted: Date | undefined;
  readonly estimate: string | undefined;
  readonly postponed: number;
  readonly priority: TaskPriority | undefined;
  readonly parent: ITaskSeries;
}
