import { Concierto } from "./Concierto";

export interface ConciertoRepository {
  create( concierto:Concierto ): Promise<void>;
  save(concierto:Concierto ): Promise<void>
  find(name: string): Promise<Concierto>;
  all(): Promise<Concierto[]>;
}