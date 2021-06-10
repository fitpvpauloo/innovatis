import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-administrador',
  templateUrl: './nav-administrador.component.html',
  styleUrls: ['./nav-administrador.component.css']
})
export class NavAdministradorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sair() {
    window.localStorage.clear();
  }

}
