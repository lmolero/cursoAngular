import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../Empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {
  //con el decorador input decimos al hijo que va a recibir datos del padre
  @Input() empleado:Empleado;
  @Input() i:number;

  constructor() { }

  ngOnInit(): void {
  }

  empleados:Empleado[]=[
    new Empleado("Juan","Diaz","Presidente",7500),
    new Empleado("Ana","Martin","Directora",5500),
    new Empleado("Maria","Fdez","Jefa seccion",3500),
    new Empleado("Javier","Diaz","Administrativo",2500),
  ];


  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica:string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

}
