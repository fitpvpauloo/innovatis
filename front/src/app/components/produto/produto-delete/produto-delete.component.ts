import { Router, ActivatedRoute } from "@angular/router";
import { ProdutoService } from "./../produto.service";
import { Produto } from "./../produto.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-produto-delete",
  templateUrl: "./produto-delete.component.html",
  styleUrls: ["./produto-delete.component.css"],
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto = {
    id_categoria: null,
    id_fornecedor: null,
    idproduto: null,     //id
    nome_produto: '',  //nome
    quantidade: null,
    status_produto: '',
  }

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.produtoService.readById(id).subscribe((produto) => {
      this.produto = produto;
    });
  }

  deleteProduto(): void {
    this.produtoService.delete(this.produto.idproduto).subscribe(() => {
      this.produtoService.showMessage("Excluido com sucesso!");
      this.router.navigate(["/produtos"]);
    });
  }

  cancel(): void {
    this.router.navigate(['/produtos']);
  }
}
