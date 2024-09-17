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
    {name : 'Daniel', type:'HUman'},
    {name : 'Fedex', type:'Dog'},
    {name : 'Markus', type:'Bird'}
  ]
}
