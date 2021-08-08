import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Persona} from "../interfaces/Persona.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = "http://hp-api.herokuapp.com/api/characters";

  constructor(private http: HttpClient) {
  }

  listarPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.URL}`);
  }
}
