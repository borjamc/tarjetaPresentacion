import {Directive} from '@angular/core';
@Directive({
selector: '[MiEvento]',
host:{
  '(click)':'ocultarBoton()',
}
})
export class MiEvento{
varVisible:number = 1;

ocultarBoton(){
  if(this.varVisible == 1){
    this.varVisible = 0
    document.getElementById('boton').innerHTML = 'Mostrar Formulario';
  }else{
    this.varVisible = 1;
    document.getElementById('boton').innerHTML = 'Ocultar Formulario';
  }
}
}
