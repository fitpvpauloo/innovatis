import { fornecedor } from "./../fornecedor.model";
import { Router, ActivatedRoute } from "@angular/router";
import { fornecedorService } from "./../fornecedor.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fornecedor-update",
  templateUrl: "./fornecedor-update.component.html",
  styleUrls: ["./fornecedor-update.component.css"],
})
export class fornecedorUpdateComponent implements OnInit {

  fornecedor: fornecedor = {
    idfornecedor: null, //id
    razao_social: '', //name
    cnpj: null
  }

  constructor(
    private fornecedorService: fornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id =+ this.route.snapshot.paramMap.get("id");
    this.fornecedorService.readById(id).subscribe((fornecedor) => {
      this.fornecedor = fornecedor;
    });
  }

  updatefornecedor(): void {
    this.fornecedorService.update(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage("Atualizado com sucesso!");
      this.router.navigate(["/fornecedors"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/fornecedors"]);
  }
}
