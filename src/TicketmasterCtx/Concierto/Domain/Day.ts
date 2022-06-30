import {Stage} from "./Stage";

export class Day {
    constructor(
        private _date: string,
        private _stages: Stage[],
        private _seats: number
    ) {
    }

    public static create(date: string, seats: number): Day {
        return new Day(
            date,
            [],
            seats
        );
    }


    get date(): string {
        return this._date;
    }

    get stages(): Stage[] {
        return this._stages;
    }

    get seats(): number {
        return this._seats;
    }

}
