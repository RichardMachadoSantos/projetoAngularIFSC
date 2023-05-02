import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {
  nomes: String[]

  constructor(){
    this.nomes = ["João", "Marcio", "Felipe"];
  }
  getNomes():String[]{
    return this.nomes;
  }


}
