import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.categoriaService
      .buscarCategorias()
      .subscribe((dados) => {
        console.log(dados);
      });
  }

}
