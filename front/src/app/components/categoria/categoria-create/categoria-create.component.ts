import { categoria } from './../categoria.model';
import { categoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Produto } from './../../produto/produto.model';
import { ProdutoService } from './../../produto/produto.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class categoriaCreateComponent implements OnInit {

  produto: Produto = {
    id_categoria: null,
    id_fornecedor: null,
    idproduto: null,     //id
    nome_produto: '',  //nome
    quantidade: 0,
    status_produto: '',
  }

  produtos: Produto

  categoria: categoria = {
    nome_categoria: ''
  }

  categorias: categoria

  constructor(
    private categoriaService: categoriaService,
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.categoriaService.teste().subscribe(categorias => {
      this.categorias = categorias
    })

    this.produtoService.teste().subscribe(produtos => {
      this.produtos = produtos
    })

  }
 
  createcategoria(): void {
    this.categoriaService.create(this.categoria)
    .subscribe(data => {
      this.categoriaService.showMessage('criado!')
      this.router.navigate(['/categorias'])
    })
  }

  cancel(): void {
    this.router.navigate(['/categorias'])
  }
}
