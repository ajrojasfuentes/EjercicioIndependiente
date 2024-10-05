import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjercicioindependienteComponent } from "./ejercicioindependiente/ejercicioindependiente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EjercicioindependienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
