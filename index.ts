import { Concierto } from "./src/TicketmasterCtx/Concierto/Domain/Concierto";
import { Day } from "./src/TicketmasterCtx/Concierto/Domain/Day";
import { Stage } from "./src/TicketmasterCtx/Concierto/Domain/Stage";
Stage
import { ConciertoDays } from "./src/TicketmasterCtx/Concierto/Domain/ValueObjects/ConciertoDays";
import { ConciertoName } from "./src/TicketmasterCtx/Concierto/Domain/ValueObjects/ConciertoName";
import { ConciertoMemoryRepository } from "./src/TicketmasterCtx/Concierto/Infrastructure/Persistence/ConciertoMemoryRepository";

const repo = new ConciertoMemoryRepository();

try {
  
  const concierto = Concierto.create(
    new ConciertoName("MF 23"),
    "Auditorio BlackBerry"
  );

  const seats_per_day = 50;
  concierto.addDay(Day.create("Día 1", seats_per_day));
  concierto.addDay(Day.create("Día 2", seats_per_day));

  repo.save(concierto);

console.log(concierto);
} catch(err) {
  console.log(err.message)
}
