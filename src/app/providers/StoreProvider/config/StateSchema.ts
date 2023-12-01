import { UserSchema } from "@entities/User";
import { LoginSchema } from "@features/AuthByUserName";
import { CounterSchema } from "src/entities/Counter";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  login: LoginSchema;
}
