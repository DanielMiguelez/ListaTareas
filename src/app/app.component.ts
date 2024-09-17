import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NombreComponenteComponent } from './nombre-componente/nombre-componente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NombreComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nombre_proyecto';
}
