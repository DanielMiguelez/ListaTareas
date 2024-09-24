import { Component } from '@angular/core';
import { DaniServiceService } from '../dani-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-add',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-add.component.html',
  styleUrl: './componente-add.component.css'
})
export class ComponenteAddComponent {

  tiposComponente: string[] = ['Humano', 'Perro', 'Ave'];


  constructor (private DaniServiceService : DaniServiceService){}

  addComponent(name:string, type:string){
    this.DaniServiceService.addComponent({name, type});
  }


}
