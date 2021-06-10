import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-fornecedor-crud',
  templateUrl: './fornecedor-crud.component.html',
  styleUrls: ['./fornecedor-crud.component.css']
})
export class fornecedorCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Fornecedores',
      icon: '',
      routeUrl: '/fornecedors'
    }
  }

  ngOnInit(): void {
  }

  navigateTofornecedorCreate(): void {
    this.router.navigate(['/fornecedors/create'])
  }

}
