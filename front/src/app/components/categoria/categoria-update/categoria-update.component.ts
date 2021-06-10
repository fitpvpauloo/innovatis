import { categoria } from "./../categoria.model";
import { Router, ActivatedRoute } from "@angular/router";
import { categoriaService } from "./../categoria.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categoria-update",
  templateUrl: "./categoria-update.component.html",
  styleUrls: ["./categoria-update.component.css"],
})
export class categoriaUpdateComponent implements OnInit {
  
  categoria: categoria = {
    nome_categoria: ''
  }

  constructor(
    private categoriaService: categoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id =+ this.route.snapshot.paramMap.get("id");
    this.categoriaService.readById(id).subscribe((categoria) => {
      this.categoria = categoria;
    });
  }

  updatecategoria(): void {
    this.categoriaService.update(this.categoria).subscribe(() => {
      this.categoriaService.showMessage("Atualizado com sucesso!");
      this.router.navigate(["/categorias"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/categorias"]);
  }
}
