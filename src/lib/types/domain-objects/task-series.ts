import { Note } from "./note";
import { RawTask } from "./task";

export interface RawTaskSeries {
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
  task: RawTask[] | undefined;
}
