import {Component, OnInit} from '@angular/core';
import {PersonaService} from "../../../../servicios/persona.service";
import {PersonaModel} from "../../../../interfaces/Persona.interface";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})

export class InicioComponent implements OnInit {
  listaGryffindor: PersonaModel[] = [];
  listaHufflepuff: PersonaModel[] = [];
  listaRavenclaw: PersonaModel[] = [];
  listaSlytherin: PersonaModel[] = [];
  listaMiembrosSeleccionados: PersonaModel[] = [];
  listaMiembroFiltrado: PersonaModel[] = [];
  filtro: string = '';
  rutaImagenGryffindor: string = "assets/img/Gryffindor.webp";
  rutaImagenHufflepuff: string = "assets/img/Hufflepuff.webp";
  rutaImagenRavenclaw: string = "assets/img/Ravenclaw.webp";
  rutaImagenSlytherin: string = "assets/img/Slytherin.webp";
  vMostrarMiembros: boolean = false;
  mostrarCarrousel: boolean = true;


  constructor(private personaService: PersonaService) {
  }

  ngOnInit(): void {
    this.servicioConsultarPersonas();
  }

  servicioConsultarPersonas(): void {
    this.personaService.listarPersonas()
      .subscribe((listaPersonas: PersonaModel[]) => {
        this.llenarListasPorCasa(listaPersonas);
      })
  }

  llenarListasPorCasa(lPersonas: PersonaModel[]): void {
    this.listaGryffindor = lPersonas.filter(persona => persona.house == "Gryffindor");
    this.listaHufflepuff = lPersonas.filter(persona => persona.house == "Hufflepuff");
    this.listaRavenclaw = lPersonas.filter(persona => persona.house == "Ravenclaw");
    this.listaSlytherin = lPersonas.filter(persona => persona.house == "Slytherin");
  }

  mostrarMiembros(lPersonas: PersonaModel[]): void {
    this.listaMiembrosSeleccionados = [];
    this.listaMiembroFiltrado = [];
    this.listaMiembrosSeleccionados = lPersonas;

    this.listaMiembrosSeleccionados.forEach((dato, index) => {
      setTimeout(() => {
        this.listaMiembroFiltrado = [...this.listaMiembroFiltrado, dato]
      }, 80 * index)
    })
    this.revertirEstados();
  }

  revertirEstados(): void {
    this.mostrarCarrousel = !this.mostrarCarrousel;
    this.vMostrarMiembros = !this.vMostrarMiembros;
    this.filtro = '';
  }

  filtrarMiembrosPorNombre() {
    this.listaMiembroFiltrado = this.listaMiembrosSeleccionados.filter(miembro =>
      miembro.name.toLowerCase().indexOf(this.filtro.toLowerCase()) != -1
    )
  }
}
