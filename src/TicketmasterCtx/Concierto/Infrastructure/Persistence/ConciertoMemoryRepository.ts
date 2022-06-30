import { ConciertoRepository } from "../../Domain/ConciertoRepository";

import { Concierto } from "../../Domain/Concierto";

export class ConciertoMemoryRepository implements ConciertoRepository {

  private items: Concierto[];
  
  constructor() {
    this.items = [];
  }
  
  async create( concierto:Concierto ): Promise<void>{
    this.items.push(concierto);
  }

  async save(concierto:Concierto ): Promise<void> {
    for(let item of this.items){
      if(item.name.value === concierto.name.value) {
        item = concierto
      }
    }
    this.create(concierto);
  }
  
  async find(name: string): Promise<Concierto> {
    const item = this.items.find( x => x.name.value === name );
    if(item === undefined || item === null){
      return Concierto.makeEmpty();
    }
    return item;
  }

  async all(): Promise<Concierto[]> {
    return this.items;
  }
}