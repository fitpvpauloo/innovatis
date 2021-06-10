import { administrador } from "./../administrador.model";
import { Router, ActivatedRoute } from "@angular/router";
import { administradoService } from "./../administrador.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-administrador-update",
  templateUrl: "./administrador-update.component.html",
  styleUrls: ["./administrador-update.component.css"],
})
export class administradorUpdateComponent implements OnInit {
  
  administrador: administrador = {
    idusuario: null,
    login: '',
    nome: '',
    senha: null
  }

  constructor(
    private administradoService: administradoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id =+ this.route.snapshot.paramMap.get("id");
    this.administradoService.readById(id).subscribe((administrador) => {
      this.administrador = administrador;
    });
  }

  updateadministrador(): void {
    this.administradoService.update(this.administrador).subscribe(() => {
      this.administradoService.showMessage("Atualizado com sucesso!");
      this.router.navigate(["/administrador"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/administrador"]);
  }
}
