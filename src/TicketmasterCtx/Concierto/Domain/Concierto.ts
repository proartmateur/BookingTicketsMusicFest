import { Day } from "./Day";
import { ConciertoDays } from "./ValueObjects/ConciertoDays";
import { ConciertoName } from "./ValueObjects/ConciertoName";
export class Concierto {
  constructor(
    private  _name: ConciertoName,
    private  _days: ConciertoDays,
    private  _place: string,
    private _tickets: number,
    private  _tickets_saled: number
  ){}

  //Tell dont ask
  public static create(
    name: ConciertoName,
    place: string
  ): Concierto {
    return new Concierto(
      name,
      new ConciertoDays([]),
      place,
      0,
      0
    );
  }

  public static makeEmpty(): Concierto {
    return Concierto.create(new ConciertoName(""),"");
  }

  //command porque muta estado - Side Effects
  //Tell don't ask
  public addDay(newDay: Day): void {
    const current_days = this._days.value;
    current_days.push(newDay);
    this._days = new ConciertoDays(current_days);
  }


  get name(): ConciertoName {
    return this._name;
  }
  get days(): ConciertoDays {
    return this._days;
  }
  get place(): string {
    return this._place;
  }
  get tickets(): number{
    return this._tickets;
  }
  get tickets_saled(): number {
    return this._tickets_saled;
  }

}
