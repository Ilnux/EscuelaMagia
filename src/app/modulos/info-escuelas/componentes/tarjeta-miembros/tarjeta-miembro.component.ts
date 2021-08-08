import {Component, Input} from '@angular/core';
import {Persona} from "../../../../interfaces/Persona.interface";

@Component({
  selector: 'app-tarjeta-miembro',
  templateUrl: './tarjeta-miembro.component.html',
})

export class TarjetaMiembroComponent {
  @Input() miembro: Persona = {} as Persona;
}
