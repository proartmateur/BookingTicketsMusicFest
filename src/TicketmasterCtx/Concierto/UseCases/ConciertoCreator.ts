import {ConciertoRepository} from "../Domain/ConciertoRepository";
import {ConciertoName} from "../Domain/ValueObjects/ConciertoName";
import {Concierto} from "../Domain/Concierto";

export class ConciertoCreator {
    constructor(private repository: ConciertoRepository) {

    }

    async run(name: string, place: string): Promise<void> {
        const concierto = Concierto.create(
            new ConciertoName(name),
            place
        )
        this.repository.save(concierto);
    }
}
