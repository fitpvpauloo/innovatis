import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { NavAdministradorComponent } from './components/template/nav-administrador/nav-administrador.component';



import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RedDirective } from './directives/red.directive';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ForDirective } from './directives/for.directive';

import { categoriaCrudComponent } from './views/categoria-crud/categoria-crud.component';
import { categoriaCreateComponent } from './components/categoria/categoria-create/categoria-create.component';
import { categoriaReadComponent } from './components/categoria/categoria-read/categoria-read.component';
import { categoriaRead2Component } from './components/categoria/categoria-read2/categoria-read2.component';
import { categoriaUpdateComponent } from './components/categoria/categoria-update/categoria-update.component';
import { categoriaDeleteComponent } from './components/categoria/categoria-delete/categoria-delete.component';

import { movimentacaoCrudComponent } from './views/movimentacao-crud/movimentacao-crud.component';
import { movimentacaoCreateComponent } from './components/movimentacao/movimentacao-create/movimentacao-create.component';
import { movimentacaoReadComponent } from './components/movimentacao/movimentacao-read/movimentacao-read.component';
import { movimentacaoRead2Component } from './components/movimentacao/movimentacao-read2/movimentacao-read2.component';

import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoReadComponent } from './components/produto/produto-read/produto-read.component';
import { ProdutoRead2Component } from './components/produto/produto-read2/produto-read2.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';

import { fornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { fornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';
import { fornecedorReadComponent } from './components/fornecedor/fornecedor-read/fornecedor-read.component';
import { fornecedorRead2Component } from './components/fornecedor/fornecedor-read2/fornecedor-read2.component';
import { fornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';
import { fornecedorDeleteComponent } from './components/fornecedor/fornecedor-delete/fornecedor-delete.component';

import { LoginComponent } from './views/login/login.component';
import { map } from "rxjs/operators";
import { TokenInterceptor } from './http-interceptors/token.interceptor';

import { administradorCreateComponent } from './components/administrador/administrador-create/administrador-create.component';
import { administradorReadComponent } from './components/administrador/administrador-read/administrador-read.component';
import { administradorRead2Component } from './components/administrador/administrador-read2/administrador-read2.component';
import { administradorUpdateComponent } from './components/administrador/administrador-update/administrador-update.component';
import { administradorDeleteComponent } from './components/administrador/administrador-delete/administrador-delete.component';

import { administradorCrudComponent } from "./views/administrador-crud/administrador-crud.component";

import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { NgxPaginationModule } from 'ngx-pagination'; // Módulo da dependência de paginação

import { NgxMaskModule, IConfig } from 'ngx-mask'

registerLocaleData(localePt);

 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    NavAdministradorComponent,
    HomeComponent,
    RedDirective,
    ForDirective,

    LoginComponent,

    categoriaCrudComponent,
    categoriaCreateComponent,
    categoriaReadComponent,
    categoriaRead2Component,
    categoriaUpdateComponent,
    categoriaDeleteComponent,

    movimentacaoCrudComponent,
    movimentacaoCreateComponent,
    movimentacaoReadComponent,
    movimentacaoRead2Component,

    ProdutoCrudComponent,
    ProdutoCreateComponent,
    ProdutoReadComponent,
    ProdutoRead2Component,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent,

    fornecedorCrudComponent,
    fornecedorCreateComponent,
    fornecedorReadComponent,
    fornecedorRead2Component,
    fornecedorUpdateComponent,
    fornecedorDeleteComponent,

    administradorCrudComponent,
    administradorReadComponent,
    administradorRead2Component,
    administradorCreateComponent,
    administradorUpdateComponent,
    administradorDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatRadioModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot(),
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    // {provide: LOCALE_ID,   useClass: TokenInterceptor}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;