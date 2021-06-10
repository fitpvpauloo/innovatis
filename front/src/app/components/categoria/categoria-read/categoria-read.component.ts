import { categoriaService } from './../categoria.service';
import { categoria } from './../categoria.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class categoriaReadComponent implements OnInit {

  categorias: categoria[]
    
  displayedColumns = ['nome_categoria',  'action']
  
  constructor(
    private categoriaService: categoriaService
  ) { }
 
  ngOnInit(): void {
    this.categoriaService.read().subscribe(categorias => {
      this.categorias = categorias
    })
  }
 

}
