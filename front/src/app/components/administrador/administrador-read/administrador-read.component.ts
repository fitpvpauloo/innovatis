import { administradoService } from './../administrador.service';
import { administrador } from './../administrador.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador-read',
  templateUrl: './administrador-read.component.html',
  styleUrls: ['./administrador-read.component.css']
})
export class administradorReadComponent implements OnInit {

  administrador: administrador[]
    
  displayedColumns = ['idusuario', 'login', 'nome', 'action']
  
  constructor(private administradoService: administradoService) { }

  
 
  ngOnInit(): void {
    this.administradoService.read().subscribe(administrador => {
      this.administrador = administrador
    })
  }
 

}
