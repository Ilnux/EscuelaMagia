import {getTestBed, TestBed} from '@angular/core/testing';
import {PersonaService} from './persona.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('PersonaService', () => {
  let injector: TestBed;
  let personaService: PersonaService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonaService],
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    personaService = injector.get(PersonaService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('Consultar personas de la escuela', () => {
    personaService.listarPersonas()
      .subscribe(data => {
        expect(data).toBeDefined();
      });
    const url = personaService.URL;
    const request = httpTestingController.expectOne(url);

    expect(request.request.responseType).toEqual('json');
    expect(request.request.method).toEqual('GET');
  });

});


