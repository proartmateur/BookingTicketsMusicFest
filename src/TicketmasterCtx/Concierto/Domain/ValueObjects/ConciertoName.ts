import { StringValueObject } from "../../../../Shared/ValueObjects/StringValueObject";

import {ConciertoUnexpectedValue} from './ConciertoUnexpectedValue'

export class ConciertoName extends StringValueObject {
  constructor (protected _value: string){
    super(_value);
    //El nombre de un concierto no debe exceder 10 chars
    if(_value.length > 10){
      throw new ConciertoUnexpectedValue(`El nombre: ${_value} es demasiado largo. Se esperaban máximo 10 caracteres pero se obtuvo ${_value.length}`);
    }
  }
}