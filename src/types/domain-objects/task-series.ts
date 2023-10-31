import { Note } from "./note";
import { Task } from "./task";

export interface TaskSeries {
  id: string;
  created: string;
  modified: string;
  name: string;
  source: string;
  url: string;
  location_id: string;
  tags: { tag: string[] };
  participants: never[];
  notes: { note: Note[] };
  task: Task[] | undefined;
}
