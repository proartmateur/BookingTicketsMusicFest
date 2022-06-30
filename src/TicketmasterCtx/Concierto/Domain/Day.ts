import { Stage } from "./Stage";

Stage
export class Day {
  constructor(
    private date: string,
    private stages: Stage[],
    private seats: number  
  ){}

  public static create(date: string, seats: number): Day {
    return new Day(
      date,
      [],
      seats
    );
  }
}