import { Component, OnInit  } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  DataService: any;
  form: any;
  constructor(private dataService:DataService) {
    
   }
  ngOnInit(): void {

  }


  calcular (){
    
    var vivienda = document.querySelector("#vivienda") as HTMLInputElement;
    var educacion = document.querySelector("#educacion") as HTMLInputElement;
    var alimentacion = document.querySelector("#alimentacion") as HTMLInputElement;
    var vestimenta = document.querySelector("#vestimenta") as HTMLInputElement;
    var turismo = document.querySelector("#turismo") as HTMLInputElement;
    var salud = document.querySelector("#salud") as HTMLInputElement;
    var personal = document.querySelector("#personal") as HTMLInputElement;
    var ingreso = document.querySelector("#ingreso") as HTMLInputElement;
    this.validar_vacios(vivienda.valueAsNumber,educacion.valueAsNumber,alimentacion.valueAsNumber,vestimenta.valueAsNumber,turismo.valueAsNumber,salud.valueAsNumber,personal.valueAsNumber,ingreso.valueAsNumber);
  }
 
  tags = [
    {
      "campos":"Nombre: ",
      "id":"ingreso"
    },
    {
      "campos":"Descripción: ",
      "id":"vivienda"
    },
    {
      "campos":"Cantidad: ",
      "id":"educacion"
    },
    {
      "campos":"Precio: ",
      "id":"alimentacion"
    },
    {
      "campos":"Imágen: ",
      "id":"vestimenta"
    }
  ]

  validar_vacios(dato1:number, dato2:number,dato3:number, dato4:number,dato5:number, dato6:number,dato7:number, dato8:number ) :void{
    if ( (isNaN(dato1)) || (isNaN(dato2))|| (isNaN(dato3))|| (isNaN(dato4))|| (isNaN(dato5)) || (isNaN(dato6))|| (isNaN(dato7))|| (isNaN(dato8))) {
      var respuesta = document.querySelector("#respuesta") as HTMLDivElement;
      this.resetear ();
      var text = document.createElement('p');
      alert("Debe llenar todos los datos.");
    }
    else if( dato1 <0 || dato2 <0 || dato3 <0 || dato4 <0 || dato5 <0 || dato6 <0 || dato7 <0 || dato8 <0  ){
      var respuesta = document.querySelector("#respuesta") as HTMLDivElement;
      this.resetear ();
      var text = document.createElement('p');
      alert("No puede ingresar valores negativos.");
    }
  }
  change () : void{
    const datos: any = document.querySelector('#vivienda');
    
    datos.style.color="red";
  }
  resetear () : void{
    var respuesta = document.querySelector("#respuesta") as HTMLDivElement;
   
    respuesta.firstElementChild?.remove()
    respuesta.firstElementChild?.remove()
    respuesta.firstElementChild?.remove()
    respuesta.firstElementChild?.remove()
    respuesta.style.backgroundColor="#fffff";
  }

  
}