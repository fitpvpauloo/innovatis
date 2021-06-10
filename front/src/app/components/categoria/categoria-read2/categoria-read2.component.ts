import { categoria } from './../categoria.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { categoriaRead2DataSource } from './categoria-read2-datasource';

@Component({
  selector: 'app-categoria-read2',
  templateUrl: './categoria-read2.component.html',
  styleUrls: ['./categoria-read2.component.css']
})
export class categoriaRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<categoria>;
  dataSource: categoriaRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['idcategoria',  'nome_categoria', ];

  ngOnInit() {
    this.dataSource = new categoriaRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
