import { Component } from '@angular/core';

@Component({
  selector: 'tarjetas',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre:string = 'Pepe Martinez';
  profesion:string='Programador web';
  telefono:number = 645284178;
  correo:string = "pepe@gmail.com";
  direccion:string = "C/Santa Ana, 6";
  twitter:string = "https://twitter.com";
  envato:string = "https://envato.com/";


  actualizar(event){
    var campo = event.target.id;
    if (campo == 'nombre'){
      this.nombre = event.target.value;
    }else if (campo == 'profesion'){
      this.profesion = event.target.value;
    }else if (campo == 'telefono'){
      this.telefono = event.target.value;
    }else if (campo == 'correo'){
      this.correo = event.target.value;
    }else if (campo == 'direccion'){
      this.direccion = event.target.value;
    }else if (campo == 'twitter'){
      this.twitter = event.target.value;
    }else if (campo == 'envato'){
      this.envato = event.target.value;
    }
  }



  visibilidad(){
    var varVisible;
    if(this.varVisible == 0){
      this.varVisible = 1
    }else{
      this.varVisible = 0;
    }

  }
}
