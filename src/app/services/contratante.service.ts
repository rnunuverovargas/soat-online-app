import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContratanteService {

  constructor(private readonly http: HttpClient) { }

  getContratante(tipoDocId, nroDoc) {
    return this.http.get(`https://localhost:44313/api/Contratante/ObtenerContratante/${tipoDocId}/${nroDoc}`);
  }
}
