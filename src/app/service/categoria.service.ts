import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url: string = 'http://localhost:8080/categoria';

  constructor(
    private httpClient: HttpClient
  ) { }

  buscarCategorias(){
    return this.httpClient.get(this.url)
  }
}
