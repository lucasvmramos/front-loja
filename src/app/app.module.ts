import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from "@angular/material/expansion";
import { FormProdutoComponent } from './component/form-produto/form-produto.component';
import { MatButtonModule } from '@angular/material/button';
import { TabelaProdutosComponent } from './component/tabela-produtos/tabela-produtos.component';
import { MatTableModule } from "@angular/material/table";
import { MonetarioPipe } from './pipe/monetario.pipe';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormProdutoComponent,
    TabelaProdutosComponent,
    MonetarioPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatDividerModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
