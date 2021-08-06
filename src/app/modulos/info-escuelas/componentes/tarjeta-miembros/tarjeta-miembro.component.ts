import {Component, Input} from '@angular/core';
import {PersonaModel} from "../../../../interfaces/Persona.interface";

@Component({
  selector: 'app-tarjeta-miembro',
  templateUrl: './tarjeta-miembro.component.html',
})

export class TarjetaMiembroComponent {
  @Input() miembro: PersonaModel = {} as PersonaModel;
}
