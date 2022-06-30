import { Day } from "../Day";
import { ConciertoUnexpectedValue } from "./ConciertoUnexpectedValue";

export class ConciertoDays {
  private max_days = 3;
  
   constructor(private _value: Day[]) {
    if(_value.length > this.max_days) {
      throw new ConciertoUnexpectedValue(`Un concierto no puede durar más de ${this.max_days} días. Se intentó crear uno de ${_value.length}`);
    }
  }
  
  value(): Day[] {
    return this._value;
  }
}