import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  // propiedades de clase
  // si hacemos parseInt en los metodos se usa de la siguiente manera
  // numero1:string = "0";
  // numero2:string = "0";
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  // metodos para la calculadora
  sumar():void{
    this.resultado = this.numero1 + this.numero2;
  }

  restar():void{
    this.resultado = this.numero1 - this.numero2;
  }
}
