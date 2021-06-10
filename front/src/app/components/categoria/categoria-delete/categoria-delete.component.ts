import { Router, ActivatedRoute } from "@angular/router";
import { categoriaService } from "./../categoria.service";
import { categoria } from "./../categoria.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categoria-delete",
  templateUrl: "./categoria-delete.component.html",
  styleUrls: ["./categoria-delete.component.css"],
})
export class categoriaDeleteComponent implements OnInit {
  categoria: categoria;

  constructor(
    private categoriaService: categoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoriaService.readById(id).subscribe((categoria) => {
      this.categoria = categoria;
    });
  }

  deletecategoria(): void {
    this.categoriaService.delete(this.categoria.idcategoria).subscribe(() => {
      this.categoriaService.showMessage("Excluido com sucesso!");
      this.router.navigate(["/categorias"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/categorias"]);
  }
}
