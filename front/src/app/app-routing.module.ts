import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";

import { categoriaDeleteComponent } from './components/categoria/categoria-delete/categoria-delete.component';
import { categoriaUpdateComponent } from './components/categoria/categoria-update/categoria-update.component';
import { categoriaCrudComponent } from "./views/categoria-crud/categoria-crud.component";
import { categoriaCreateComponent } from './components/categoria/categoria-create/categoria-create.component';

import { movimentacaoCrudComponent } from "./views/movimentacao-crud/movimentacao-crud.component";
import { movimentacaoCreateComponent } from './components/movimentacao/movimentacao-create/movimentacao-create.component';

import { fornecedorDeleteComponent } from './components/fornecedor/fornecedor-delete/fornecedor-delete.component';
import { fornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';
import { fornecedorCrudComponent } from "./views/fornecedor-crud/fornecedor-crud.component";
import { fornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';

import { ProdutoDeleteComponent } from './components/produto/produto-delete/produto-delete.component';
import { ProdutoUpdateComponent } from './components/produto/produto-update/produto-update.component';
import { ProdutoCrudComponent } from "./views/produto-crud/produto-crud.component";
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';

import { administradorDeleteComponent } from './components/administrador/administrador-delete/administrador-delete.component';
import { administradorUpdateComponent } from './components/administrador/administrador-update/administrador-update.component';
import { administradorCreateComponent } from './components/administrador/administrador-create/administrador-create.component';
import { administradorCrudComponent } from "./views/administrador-crud/administrador-crud.component";

import { LoginComponent } from './views/login/login.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "",
    component: LoginComponent,
  },

  {
    path: "administrador",
    component: administradorCrudComponent,
  },
  {
    path: "administrador/create",
    component: administradorCreateComponent
  },
  {
    path: "administrador/update/:id",
    component: administradorUpdateComponent
  },
  {
    path: "administrador/delete/:id",
    component: administradorDeleteComponent
  },

  {
    path: "categorias",
    component: categoriaCrudComponent
  },
  {
    path: "categorias/create",
    component: categoriaCreateComponent
  },
  {
    path: "categorias/update/:id",
    component: categoriaUpdateComponent
  },
  {
    path: "categorias/delete/:id",
    component: categoriaDeleteComponent
  },
  
  {
    path: "movimentacoes",
    component: movimentacaoCrudComponent
  },
  {
    path: "movimentacoes/create",
    component: movimentacaoCreateComponent
  },

  {
    path: "produtos",
    component: ProdutoCrudComponent
  },
  {
    path: "produtos/create",
    component: ProdutoCreateComponent
  },
  {
    path: "produtos/update/:id",
    component: ProdutoUpdateComponent
  },
  {
    path: "produtos/delete/:id",
    component: ProdutoDeleteComponent
  },

  {
    path: "fornecedors",
    component: fornecedorCrudComponent
  },
  {
    path: "fornecedors/create",
    component: fornecedorCreateComponent
  },
  {
    path: "fornecedors/update/:id",
    component: fornecedorUpdateComponent
  },
  {
    path: "fornecedors/delete/:id",
    component: fornecedorDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
