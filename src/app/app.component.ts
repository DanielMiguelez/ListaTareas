import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NombreComponenteComponent } from './nombre-componente/nombre-componente.component';
import { ComponenteAddComponent } from "./componente-add/componente-add.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NombreComponenteComponent, ComponenteAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nombre_proyecto';
}
