import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DaniServiceService {

    componentes = [
      {name : 'Daniel', type:'Humano'},
      {name : 'Fedex', type:'Perro'},
      {name : 'Markus', type:'Ave'}
    ];

  getComponentes(){
      return this.componentes;
    }

  addComponent(componente :{name:string, type:string})
  {
    this.componentes.push(componente);
  }
  
  deleteComponent(index: number){
    this.componentes.splice(index, 1);
  }
}
