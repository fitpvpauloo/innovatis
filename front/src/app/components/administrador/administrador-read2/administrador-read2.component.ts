import { administrador } from './../administrador.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { administradorRead2DataSource } from './administrador-read2-datasource';

@Component({
  selector: 'app-administrador-read2',
  templateUrl: './administrador-read2.component.html',
  styleUrls: ['./administrador-read2.component.css']
})
export class administradorRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<administrador>;
  dataSource: administradorRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['idusuario', 'login', 'nome', 'senha' ];

  ngOnInit() {
    this.dataSource = new administradorRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
