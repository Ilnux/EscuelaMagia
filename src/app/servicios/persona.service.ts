import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PersonaModel} from "../modelos/Persona";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = "http://hp-api.herokuapp.com/api/characters";

  constructor(private http: HttpClient) {
  }

  listarPersonas(): Observable<PersonaModel[]> {
    return this.http.get<PersonaModel[]>(`${this.URL}`);
  }
}
