import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutosModel } from '../model/produtos-model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly url = 'http://localhost:8080/produto';

  constructor(
    private httpClient: HttpClient
  ) { }

  buscarProdutos(): Observable<Array<ProdutosModel>> {
    return this.httpClient.get<Array<ProdutosModel>>(this.url)
  }
}
