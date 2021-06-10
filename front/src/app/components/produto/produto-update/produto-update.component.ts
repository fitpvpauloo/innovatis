import { Component, OnInit } from '@angular/core';
import { Produto } from "../produto.model";
import { ProdutoService } from "../produto.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-produto-update",
  templateUrl: "./produto-update.component.html",
  styleUrls: ["./produto-update.component.css"],
})

export class ProdutoUpdateComponent implements OnInit {

  produto: Produto = {
    id_categoria: null,
    id_fornecedor: null,
    idproduto: null,     //id
    nome_produto: "",  //nome
    quantidade: null,
    status_produto: ""
  };

  produtos: Produto

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id =+ this.route.snapshot.paramMap.get("id");
    this.produtoService.readById(id).subscribe((produto) => {
      this.produto = produto;
    });
  }

  updateProduto(): void {
    this.produtoService.update(this.produto).subscribe(() => {
      this.produtoService.showMessage("Atualizado com sucesso!");
      this.router.navigate(["/produtos"]);
    });
  }

  cancel(): void {
    this.router.navigate(['/produtos']);
  }
}
