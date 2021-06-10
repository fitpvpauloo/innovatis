import { ProdutoService } from './../produto.service';
import { Produto } from './../produto.model';
import { Component, OnInit } from '@angular/core';

import { categoria } from './../../categoria/categoria.model';
import { categoriaService } from './../../categoria/categoria.service';



@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  categorias: categoria[]

  produtos: Produto[]

  displayedColumns = [
    'idproduto', 
    'nome_produto',
    'quantidade',
    'status_produto',
    
    'id_categoria',
    'id_fornecedor',
    
    'categoria',
    'fornecedor',
    'action',
  ]

  collection = [];

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: categoriaService
  ) { }

  ngOnInit(): void {
    this.produtoService.read().subscribe((produtos) => {
      this.produtos = produtos;
    });

    this.categoriaService.read().subscribe(categorias => {
      this.categorias = categorias
    })
  }

}
