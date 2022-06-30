//Controller necesita inject Repo ConciertoRepository -> ConciertoMemoryRepository

import {
    ConciertoMemoryRepository
} from "./src/TicketmasterCtx/Concierto/Infrastructure/Persistence/ConciertoMemoryRepository";
import {ConciertoDayAdder} from "./src/TicketmasterCtx/Concierto/UseCases/ConciertoDayAdder";
import {ConciertoFinder} from "./src/TicketmasterCtx/Concierto/UseCases/ConciertoFinder";

const repo = new ConciertoMemoryRepository();

// Obtener del exterior los datos del concierto
const concierto_name = "MF 23";
const concierto_place = "Auditorio BlackBerry";
const day_1 = {date: "", seats: 50};

// Cuerpo del controller
const adder = new ConciertoDayAdder(repo);
adder.run(concierto_name, {date: "", seats: 50})

const finder = new ConciertoFinder(repo);
const saved_concierto = await finder.run(concierto_name);

console.log(saved_concierto)


