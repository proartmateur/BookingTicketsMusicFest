import {ConciertoRepository} from "../Domain/ConciertoRepository";
import {ConciertoName} from "../Domain/ValueObjects/ConciertoName";
import {Concierto} from "../Domain/Concierto";
import {Day} from "../Domain/Day";

interface NewDay {
    date: string;
    seats: number;
}

export class ConciertoDayAdder {
    constructor(private repository: ConciertoRepository) {

    }

    async run(concierto_name: string, new_day: NewDay): Promise<void> {

        const {date, seats} = new_day;
        const newDay = Day.create(date, seats);

        const concierto = await this.repository.find(concierto_name);
        concierto.addDay(newDay);
        
        this.repository.save(concierto);
    }
}
