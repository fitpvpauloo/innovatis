import { administrador } from './../administrador.model';
import { administradoService } from './../administrador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador-create',
  templateUrl: './administrador-create.component.html',
  styleUrls: ['./administrador-create.component.css']
})
export class administradorCreateComponent implements OnInit {

  administrador: administrador = {
    idusuario: null,
    nome: '',
    login: '',
    senha: null,
  }

  constructor(
    private administradoService: administradoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
 
  createadministrador(): void {
    this.administradoService.create(this.administrador).subscribe(data => {
      console.log(data)
      this.administradoService.showMessage('criado!')
      this.router.navigate(['/administrador'])
    })
  }

  cancel(): void {
    this.router.navigate(['/administrador'])
  }
}
