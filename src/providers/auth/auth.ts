import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor() {
    console.log('Hello AuthProvider Provider');
  }

  login() {
    return Promise.resolve(
      {
        ciclo:'2018.B2',
        turmas:[
          {
            turma_id:1,
            descricao:'1º Mod em INFO',
            curso:'Informática para Internet',
            avls_pendentes:5
          },
          {
            turma_id:2,
            descricao:'1º Ano em AGRO',
            curso:'Integrado em AGRO',
            avls_pendentes:10
          }
        ]
      }
    )
  }

}
