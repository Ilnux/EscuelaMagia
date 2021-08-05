import {Component, Input} from '@angular/core';
import {PersonaModel} from "../../modelos/Persona";

@Component({
  selector: 'app-tarjeta-casa',
  templateUrl: './tarjeta-casa.component.html'
})
export class TarjetaCasaComponent {

  @Input() listaCasas: PersonaModel[] = [];
  @Input() rutaImagen: string = '';


  constructor() {
  }


}
