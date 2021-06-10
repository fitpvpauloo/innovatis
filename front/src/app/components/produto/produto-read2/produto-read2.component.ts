import { Produto } from './../produto.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProdutoRead2DataSource } from './produto-read2-datasource';

@Component({
  selector: 'app-produto-read2',
  templateUrl: './produto-read2.component.html',
  styleUrls: ['./produto-read2.component.css']
})
export class ProdutoRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Produto>;
  dataSource: ProdutoRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id_categoria', 'id_fornecedor', 'idproduto', 'nome_produto', 'quantidade', 'status_produto',];

  ngOnInit() {
    this.dataSource = new ProdutoRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
