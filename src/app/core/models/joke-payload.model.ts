import { Joke } from "./joke.model";

export interface JokePayload {
  type: string;
  value: Joke;
}
