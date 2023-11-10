import { ITask } from "./i-task";

export interface ITaskSeries {
  readonly id: string;
  readonly created: Date;
  readonly name: string;
  readonly source: string;
  readonly locationId: string | undefined;
  readonly tasks: ITask[];
}
