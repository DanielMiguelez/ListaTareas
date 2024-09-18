import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nombre-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nombre-componente.component.html',
  styleUrl: './nombre-componente.component.css'
})
export class NombreComponenteComponent {
  componentes = [
    {name : 'Daniel', type:'Humano'},
    {name : 'Fedex', type:'Perro'},
    {name : 'Markus', type:'Ave'}
  ]

  tiposComponente: string[] = ['Humano', 'Perro', 'Ave'];



  addComponent(componente :{name:string, type:string})
  {
    this.componentes.push(componente);
  }
  
}
