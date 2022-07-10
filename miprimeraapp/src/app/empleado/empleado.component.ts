import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']

  // aplicando estilos inline asi
  // styles:["p {background-color: red;"]
  
})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";
  apellido = "Díaz";
  edad = 28;
  // private edad = 18;
  empresa = "google";
 
  // setter y getters
  // getEdad(){

  //   return this.edad;
  // }

  // funcion al hacer click
  // llamaEmpresa(value: String){

  // }

  // property binding
  habilitacionCuadro=true;

  usuRegistrado=true;

  textoDeRegistro = "no hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(event:Event){
    //para ver un objeto event
    //alert(event.target);
    // this.textoDeRegistro = "usuario registrado";
    //alert("usuario registrado!");
    if ((<HTMLInputElement>event.target).value=="si") {
      this.textoDeRegistro = "el usuario se acaba de registrar";
    }else{
      this.textoDeRegistro = "no hay nadie registrado";
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
