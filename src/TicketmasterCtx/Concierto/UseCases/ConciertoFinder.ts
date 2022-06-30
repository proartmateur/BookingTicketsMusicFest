import {ConciertoRepository} from "../Domain/ConciertoRepository";
import {ConciertoName} from "../Domain/ValueObjects/ConciertoName";
import {Concierto} from "../Domain/Concierto";
import {ConciertoMapper, ConciertoPrimitives} from "./ConciertoMapper";



export class ConciertoFinder {
    constructor(private repository: ConciertoRepository) {

    }

    async run(name: string): Promise<ConciertoPrimitives> {
        const concierto = await this.repository.find(name);
        return ConciertoMapper.map(concierto);
    }
}
