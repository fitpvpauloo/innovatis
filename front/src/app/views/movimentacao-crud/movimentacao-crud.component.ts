import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-movimentacao-crud',
  templateUrl: './movimentacao-crud.component.html',
  styleUrls: ['./movimentacao-crud.component.css']
})
export class movimentacaoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Movimentações',
      icon: '',
      routeUrl: '/movimentacoes'
    }
  }

  ngOnInit(): void {
  }

  navigateTomovimentacaoCreate(): void {
    this.router.navigate(['/movimentacoes/create'])
  }

}
