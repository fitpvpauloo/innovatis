import { fornecedor } from './../fornecedor.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { fornecedorRead2DataSource } from './fornecedor-read2-datasource';

@Component({
  selector: 'app-fornecedor-read2',
  templateUrl: './fornecedor-read2.component.html',
  styleUrls: ['./fornecedor-read2.component.css']
})
export class fornecedorRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<fornecedor>;
  dataSource: fornecedorRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['idfornecedor', 'razao_social', 'cnpj'];

  ngOnInit() {
    this.dataSource = new fornecedorRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
