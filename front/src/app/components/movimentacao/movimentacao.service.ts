import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { movimentacao } from "./movimentacao.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})

export class movimentacaoService {
  
  baseUrl = "http://54.90.39.27:5000/movimentacoes";
  baseUrl2 = "http://54.90.39.27:5000/movimentacao";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  teste(): Observable<movimentacao> {
    return this.http.get<movimentacao>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
 
  create(movimentacao: movimentacao): Observable<movimentacao> {
    return this.http.post(`${this.baseUrl2}/novo`, movimentacao).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<movimentacao[]> {
    return this.http.get<movimentacao[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(idmovimentacao: number): Observable<movimentacao> {
    const url = `${this.baseUrl}/${idmovimentacao}`;
    return this.http.get<movimentacao>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Digite uma quantidade válida!!!", true);
    return EMPTY;
  }
}
