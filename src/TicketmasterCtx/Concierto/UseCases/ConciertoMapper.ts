import {Concierto} from "../Domain/Concierto";

export interface DayPrimitives {
    date: string;
    stages: any[];
    seats: number;
}

export interface ConciertoPrimitives {
    name: string;
    days: DayPrimitives[];
    place: string;
    tickets_saled: number;
}

export class ConciertoMapper {
    static map(concierto: Concierto): ConciertoPrimitives {

        return {
            name: concierto.name.value,
            days: ConciertoMapper.mapDays(concierto),
            place: concierto.place,
            tickets_saled: concierto.tickets_saled,
        };
    }

    static mapDays(concierto: Concierto): DayPrimitives[] {
        return concierto.days.value.map(x => {
            return {
                date: x.date,
                stages: JSON.parse(JSON.stringify(x.stages)),
                seats: x.seats,
            }
        })
    }
}
