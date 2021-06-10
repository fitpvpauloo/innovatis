import { movimentacao } from './../movimentacao.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { movimentacaoRead2DataSource } from './movimentacao-read2-datasource';

@Component({
  selector: 'app-movimentacao-read2',
  templateUrl: './movimentacao-read2.component.html',
  styleUrls: ['./movimentacao-read2.component.css']
})
export class movimentacaoRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<movimentacao>;
  dataSource: movimentacaoRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id_produto', 'id_usuario',  'idmovimentacao', 'data_hora', 'login_usuario', 'nome_produto', 'quantidade', 'tipo_movimentacao' ];

  ngOnInit() {
    this.dataSource = new movimentacaoRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
