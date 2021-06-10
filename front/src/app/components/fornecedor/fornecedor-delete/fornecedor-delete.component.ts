import { Router, ActivatedRoute } from "@angular/router";
import { fornecedorService } from "./../fornecedor.service";
import { fornecedor } from "./../fornecedor.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fornecedor-delete",
  templateUrl: "./fornecedor-delete.component.html",
  styleUrls: ["./fornecedor-delete.component.css"],
})
export class fornecedorDeleteComponent implements OnInit {
  fornecedor: fornecedor;

  constructor(
    private fornecedorService: fornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // ngOnInit(): void {
  //   const idfornecedor = +this.route.snapshot.paramMap.get('idfornecedor');
  //   this.fornecedorService.readById(idfornecedor).subscribe((fornecedor) => {
  //     this.fornecedor = fornecedor;
  //   });
  // }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fornecedorService.readById(id).subscribe((fornecedor) => {
      this.fornecedor = fornecedor;
    });
  }
 

  deletefornecedor(): void {
    this.fornecedorService.delete(this.fornecedor.idfornecedor).subscribe(() => {
      this.fornecedorService.showMessage("Excluido com sucesso!");
      this.router.navigate(["/fornecedors"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/fornecedors"]);
  }
}
