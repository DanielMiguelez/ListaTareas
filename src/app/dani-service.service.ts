import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DaniServiceService {

  // Variable que se usara para guardar y recuperar los componentes del localStorage

  private storageKey = 'componentes';

  //constructor
  constructor(){
    // verifica si hay digimons en localStorage

    if(this.isLocalStorageAvailable()){
      const savedComponents = localStorage.getItem(this.storageKey);
      if(savedComponents){
        this.componentes= JSON.parse(savedComponents);
      }
    }
  }



    componentes = [
      {name : 'Daniel', type:'Humano'},
      {name : 'Fedex', type:'Perro'},
      {name : 'Markus', type:'Ave'}
    ];

  getComponentes(){
      return this.componentes;
    }

  addComponent(componente :{name:string, type:string}){
    this.componentes.push(componente);
    this.saveToLocalStorage();
  }
  
  deleteComponent(index: number){
    this.componentes.splice(index, 1);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(){
      localStorage.setItem(this.storageKey, JSON.stringify(this.componentes));
  }

  private isLocalStorageAvailable():boolean {
    try {
      return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    } catch (e) {
      return false;
    }
  }
}
