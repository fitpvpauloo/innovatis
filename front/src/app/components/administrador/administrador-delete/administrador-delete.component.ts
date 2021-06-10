import { Router, ActivatedRoute } from "@angular/router";
import { administradoService } from "./../administrador.service";
import { administrador } from "./../administrador.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-administrador-delete",
  templateUrl: "./administrador-delete.component.html",
  styleUrls: ["./administrador-delete.component.css"],
})
export class administradorDeleteComponent implements OnInit {
  administrador: administrador;

  constructor(
    private administradoService: administradoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.administradoService.readById(id).subscribe((administrador) => {
      this.administrador = administrador;
    });
  }

  deleteadministrador(): void {
    this.administradoService.delete(this.administrador.idusuario).subscribe(() => {
      this.administradoService.showMessage("Excluido com sucesso!");
      this.router.navigate(["/administrador"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/administrador"]);
  }
}
