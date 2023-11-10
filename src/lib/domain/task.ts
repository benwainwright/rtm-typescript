import { RawTaskSeries } from "@types";
import { ITask } from "../types/domain-interfaces/i-task";
import { ITaskSeries } from "../types/domain-interfaces/i-task-series";

const priorityMapping = {
  1: "High",
  2: "Medium",
  3: "Low",
  N: "None",
} as const;

export type TaskPriority =
  (typeof priorityMapping)[keyof typeof priorityMapping];

export interface TaskParams {
  id: string;
  due?: Date;
  added?: Date;
  completed?: Date;
  deleted?: Date;
  estimate?: string;
  postponed: number;
  priority?: TaskPriority;
}

export class Task implements ITask {
  constructor(
    private data: RawTaskSeries | TaskParams,
    public readonly parent: ITaskSeries,
  ) {}

  public get id(): string {
    return this.data.id;
  }

  public get due(): Date | undefined {
    return undefined;
  }

  public get added(): Date | undefined {
    return undefined;
  }

  public get completed(): Date | undefined {
    return undefined;
  }

  public get deleted(): Date | undefined {
    return undefined;
  }

  public get estimate(): string | undefined {
    return undefined;
  }

  public get postponed(): number {
    return 0;
  }

  public get priority(): TaskPriority | undefined {
    return undefined;
  }
}
