import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProdutoComponent } from './component/form-produto/form-produto.component';
import { HomeComponent } from './component/home/home.component';
import { TabelaProdutosComponent } from './component/tabela-produtos/tabela-produtos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastrarproduto', component: FormProdutoComponent },
  { path: 'produtos', component: TabelaProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
