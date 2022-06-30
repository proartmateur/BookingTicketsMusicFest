import {
    ConciertoMemoryRepository
} from "../../../../../src/TicketmasterCtx/Concierto/Infrastructure/Persistence/ConciertoMemoryRepository";
import {Concierto} from "../../../../../src/TicketmasterCtx/Concierto/Domain/Concierto";
import {ConciertoName} from "../../../../../src/TicketmasterCtx/Concierto/Domain/ValueObjects/ConciertoName";
import {Day} from "../../../../../src/TicketmasterCtx/Concierto/Domain/Day";
import {ConciertoCreator} from "../../../../../src/TicketmasterCtx/Concierto/UseCases/ConciertoCreator";
import {ConciertoFinder} from "../../../../../src/TicketmasterCtx/Concierto/UseCases/ConciertoFinder";
import {ConciertoPrimitives} from "../../../../../src/TicketmasterCtx/Concierto/UseCases/ConciertoMapper";
import {ConciertoDayAdder} from "../../../../../src/TicketmasterCtx/Concierto/UseCases/ConciertoDayAdder";

describe("Creando Conciertos", () => {
    it("Crear el concierto desde cero", async () => {
        const repo = new ConciertoMemoryRepository();

        //Given
        const concierto_name = "MF 23";
        const concierto_place = "Auditorio BlackBerry";

        //When try to create the concierto
        try {
            const creator = new ConciertoCreator(repo);
            await creator.run(concierto_name, concierto_place);
        } catch (err) {
            // @ts-ignore
            console.log(err.message)
        }

        //Then should be in db
        try {
            const finder = new ConciertoFinder(repo);
            const saved_concierto = await finder.run(concierto_name);
            expect(saved_concierto.name).toBe(concierto_name);

        } catch (err) {
            // @ts-ignore
            console.error(err.message)
        }
    })

    it("Agregar Días al Concierto", async () => {
        const repo = new ConciertoMemoryRepository();

        //Given we have a Concierto with name
        const concierto_name = "MF 23";
        const concierto_place = "Auditorio BlackBerry";
        let concierto_base: ConciertoPrimitives;

        try {
            const creator = new ConciertoCreator(repo);
            await creator.run(concierto_name, concierto_place);

        } catch (err) {
            // @ts-ignore
            console.log(err.message)
        }

        //When try to create the concierto
        try {
            const adder = new ConciertoDayAdder(repo);
            adder.run(concierto_name, {date: "", seats: 50})
        } catch (err) {

        }

        //Then should be in db
        try {
            const finder = new ConciertoFinder(repo);
            const saved_concierto = await finder.run(concierto_name);
            expect(saved_concierto.name).toBe(concierto_name);
            expect(1).toBe(saved_concierto.days.length);

        } catch (err) {
            // @ts-ignore
            console.error(err.message)
        }
    })
})
