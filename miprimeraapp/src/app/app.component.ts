import { Component } from '@angular/core';

//esto es un decorador 
@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //se conoce como una propiedad y se reutiliza dentro de la plantilla o template.
  title = 'miprimeraapp';

  saludo = "Hola mundo";
}
