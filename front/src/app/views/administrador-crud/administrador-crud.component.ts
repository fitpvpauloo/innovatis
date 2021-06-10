import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-administrador-crud',
  templateUrl: './administrador-crud.component.html',
  styleUrls: ['./administrador-crud.component.css']
})
export class administradorCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Administrador',
      icon: '',
      routeUrl: '/administrador'
    }
  }

  ngOnInit(): void {
  }

  navigateToadministradorCreate(): void {
    this.router.navigate(['/administrador/create'])
  }

}
