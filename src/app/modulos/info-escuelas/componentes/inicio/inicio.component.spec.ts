import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {InicioComponent} from './inicio.component';
import {PersonaServiceMock} from "../../../../mock/persona.service.mock";
import {PersonaService} from "../../../../servicios/persona.service";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {configureTestSuite} from "../../../../mock/testing";

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;
  const personaMock = new PersonaServiceMock();

  configureTestSuite();

  beforeAll(done => (async () => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        {provide: PersonaService, useValue: personaMock}
      ],
      imports: [],
      schemas: [NO_ERRORS_SCHEMA]
    });
    await TestBed.compileComponents();
  })().then(done).catch(done.fail));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe consumir el servicioConsultarPersona y llamar el metodo llenarListasPorCasa', () => {

    spyOn(component, 'llenarListasPorCasa');

    component.servicioConsultarPersonas();

    expect(personaMock.listarPersonas).toHaveBeenCalled();
    expect(component.llenarListasPorCasa).toHaveBeenCalled();
    //expect(component).toBeTruthy();
  });

  it('debe llamar llenarListasPorCasa y llenar los valores de cada lista', () => {

    const personas = personaMock.personas;

    component.llenarListasPorCasa(personas);

    expect(component.listaGryffindor).toEqual([personas[0]])
    expect(component.listaRavenclaw).toEqual([personas[1]])
    expect(component.listaSlytherin).toEqual([personas[2]])
    expect(component.listaHufflepuff).toEqual([personas[3]])

  })

  it('al llamar revertir estados debe revertilos en las constantes', () => {

    component.mostrarCarrousel = false;
    component.vMostrarMiembros = false;

    component.revertirEstados();

    expect(component.mostrarCarrousel).toEqual(true);
    expect(component.vMostrarMiembros).toEqual(true);
  });

  it('flitrarMienbroPorNombre debe llenar listaMiembroFiltrado con la persona con el nombre correspondiente  ', () => {

    component.filtro = 'Harry Potter';
    component.listaMiembrosSeleccionados = personaMock.personas;

    component.filtrarMiembrosPorNombre();

    expect(component.listaMiembroFiltrado).toEqual([personaMock.personas[0]]);

  });

  it('mostrarMiembros debe agregarlos a las listas', fakeAsync(() => {


    fixture.whenStable().then(() => {
      const miembros = personaMock.personas;
      component.listaMiembroFiltrado = [];
      component.listaMiembroFiltrado = [];

      component.mostrarMiembros(miembros);
      tick(800);

      expect(component.listaMiembroFiltrado).toEqual(miembros);

    })


  }));
});


