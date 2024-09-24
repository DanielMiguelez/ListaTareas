import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DaniServiceService } from '../dani-service.service';

@Component({
  selector: 'app-nombre-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nombre-componente.component.html',
  styleUrl: './nombre-componente.component.css'
})

export class NombreComponenteComponent implements OnInit{

  tiposComponente: string[] = ['Humano', 'Perro', 'Ave'];

  componentes: {name:string, type:string} []= [];

  constructor (private DaniServiceService : DaniServiceService){

  }

  ngOnInit(): void {
    this.componentes = this.DaniServiceService.getComponentes();
  }

  

  deleteComponent(index:number){
    this.DaniServiceService.deleteComponent(index);
  }
  
}
