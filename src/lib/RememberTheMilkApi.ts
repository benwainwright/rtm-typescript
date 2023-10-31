import { MappedApiSurface } from "../types/api-methods";
import { Auth } from "./namespaces/Auth";
import { Tasks } from "./namespaces/Tasks";

export class RememberTheMilkApi implements MappedApiSurface {
  public auth = new Auth();
  public tasks = new Tasks();
}
