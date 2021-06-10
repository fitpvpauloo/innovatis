import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-categoria-crud',
  templateUrl: './categoria-crud.component.html',
  styleUrls: ['./categoria-crud.component.css']
})
export class categoriaCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Categorias',
      icon: '',
      routeUrl: '/categorias'
    }
  }

  ngOnInit(): void {
  }

  navigateTocategoriaCreate(): void {
    this.router.navigate(['/categorias/create'])
  }

}
