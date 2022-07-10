import { Component } from '@angular/core';

//esto es el decorador de empleados
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  //se conoce como una propiedad y se reutiliza dentro de la plantilla o template.
  title = 'miprimeraapp';

  saludo = "Hola mundo";
}
