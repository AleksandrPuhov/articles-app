import { UserSchema } from "@entities/User";
import { CounterSchema } from "src/entities/Counter";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
