import {Component, Input} from '@angular/core';
import {Persona} from "../../../../interfaces/Persona.interface";

@Component({
  selector: 'app-tarjeta-casa',
  templateUrl: './tarjeta-casa.component.html'
})
export class TarjetaCasaComponent {

  @Input() listaCasas: Persona[] = [];
  @Input() rutaImagen: string = '';


}
