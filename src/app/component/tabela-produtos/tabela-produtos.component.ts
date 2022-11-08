import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProdutosModel } from 'src/app/model/produtos-model';
import { ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {

  dataSource: Array<ProdutosModel> = [];

  displayedColumns: string[] = ['id', 'dataCriacao', 'nome', 'valor'];

  constructor(
    private service: ProdutosService
  ) { }

  ngOnInit(): void {
    this.service.buscarProdutos()
      .pipe(
        map(dados => {
          dados.map((produto,i) => {
            let data = produto.dataCriacao.split('T')[0];
            let dataFormatada = data.split('-');

            produto.dataCriacao = `${dataFormatada[2]}/${dataFormatada[1]}/${dataFormatada[0]}` ;
          });
          return dados
        })
      ).subscribe((produtos) => {
        this.dataSource = produtos
      });
  }

}
