import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produto.model";
import { EMPTY, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProdutoService {

  baseUrl = "http://54.90.39.27:5000/produtos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, 'x', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  teste(): Observable<Produto> {
    return this.http.get<Produto>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post(`${this.baseUrl}/novo`, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorDuplicidade(e))
    );
  }

  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl)
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
  }

  readById(idproduto: number): Observable<Produto> {
    const url = `${this.baseUrl}/${idproduto}`;
    return this.http.get<Produto>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(produto: Produto): Observable<Produto> {
    const url = `${this.baseUrl}/${produto.idproduto}`;
    return this.http.put<Produto>(url, produto).pipe(
      map((obj) => obj),
      catchError((e) => this.errorDuplicidade(e))
    );
  }

  delete(idproduto: number): Observable<Produto> {
    const url = `${this.baseUrl}/${idproduto}`;
    return this.http.delete<Produto>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorMovimentado(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  errorDuplicidade(e: any): Observable<any> {
    this.showMessage("Produto já existente!", true);
    return EMPTY;
  }

  errorMovimentado(e: any): Observable<any> {
    this.showMessage("N\u00e3o \u00e9 poss\u00edvel excluir um produto com movimenta\u00e7\u00e3o j\u00e1 cadastrada!", true);
    return EMPTY;
  }
}
