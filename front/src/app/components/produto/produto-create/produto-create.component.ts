import { Produto } from './../produto.model';
import { ProdutoService } from './../produto.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { categoria } from './../../categoria/categoria.model';
import { categoriaService } from './../../categoria/categoria.service';

import { fornecedor } from './../../fornecedor/fornecedor.model';
import { fornecedorService } from './../../fornecedor/fornecedor.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})

export class ProdutoCreateComponent implements OnInit {

  fornecedor: fornecedor = {
    idfornecedor: null, //id
    razao_social: '', //name
    cnpj: null
  }
  fornecedors: fornecedor

  categoria: categoria = {
    nome_categoria: ''
  }
  categorias: categoria

  @Input() loginUsuario: any

  produto: Produto = {
    id_categoria: null,
    id_fornecedor: null,
    idproduto: null,     //id
    nome_produto: '',  //nome
    quantidade: 0,
    status_produto: '',
  }

  produtos: Produto

  constructor(
    private categoriaService: categoriaService,
    private produtoService: ProdutoService,
    private fornecedorService: fornecedorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoriaService.teste().subscribe(categorias => {
      this.categorias = categorias
    })

    this.produtoService.teste().subscribe(produtos => {
      this.produtos = produtos
    })

    this.fornecedorService.teste().subscribe(fornecedors => {
      this.fornecedors = fornecedors
    })

    var usuario = window.localStorage.getItem('idUsuario');
    this.loginUsuario = usuario
  }

  createProduto(): void {
    this.produtoService.create(this.produto) .subscribe(data => {
      this.produtoService.showMessage('criado!')
      this.router.navigate(['/produtos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/produtos'])
  }
}
