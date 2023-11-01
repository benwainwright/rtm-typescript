import { ApiSurface } from "../types/api-methods";
import { Auth } from "./namespaces/Auth";
import { Tasks } from "./namespaces/Tasks";

export class RememberTheMilkApi implements ApiSurface {
  public auth = new Auth();
  public tasks = new Tasks();
}
