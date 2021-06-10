import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loginUsuario: string;

  constructor() { }

  ngOnInit(): void {    
    var usuario = window.localStorage.getItem('idUsuario');
    this.loginUsuario = usuario
    // alert(`usuario:, ${ usuario }!`);
  }


  sair() {
    window.localStorage.clear();
  }

}
