import {Component, Input} from '@angular/core';
import {PersonaModel} from "../../../../interfaces/Persona.interface";

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
