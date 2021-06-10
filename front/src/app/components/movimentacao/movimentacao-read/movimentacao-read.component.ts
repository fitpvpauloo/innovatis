import { movimentacaoService } from './../movimentacao.service';
import { movimentacao } from './../movimentacao.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoService } from './../../produto/produto.service';
import { Produto } from './../../produto/produto.model';
// import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-movimentacao-read',
  templateUrl: './movimentacao-read.component.html',
  styleUrls: ['./movimentacao-read.component.css']
})

export class movimentacaoReadComponent implements OnInit {

  

















  produtos: Produto[]

  movimentacoes: movimentacao[]

  displayedColumns = ['data_hora', 'login_usuario', 'nome_produto', 'quantidade', 'tipo_movimentacao', /*'action'*/]

  collection = [];

  constructor(
    private movimentacaoService: movimentacaoService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {

    this.produtoService.read()
      .subscribe((produtos) => {
        this.produtos = produtos;
      });

    this.movimentacaoService.read().subscribe(movimentacoes => {
      this.movimentacoes = movimentacoes
    })
  }

}
