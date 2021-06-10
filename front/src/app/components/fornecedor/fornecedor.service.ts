import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { fornecedor } from "./fornecedor.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class fornecedorService {
  
  baseUrl = "http://54.90.39.27:5000/fornecedores";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  teste(): Observable<fornecedor> {
    return this.http.get<fornecedor>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  create(fornecedor: fornecedor): Observable<fornecedor> {
    return this.http.post(`${this.baseUrl}/novo`, fornecedor).pipe(
      map((obj) => obj),
      catchError((e) => this.errorDuplicidade(e))
    );
  }

  read(): Observable<fornecedor[]> {
    return this.http.get<fornecedor[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(idfornecedor: number): Observable<fornecedor> {
    const url = `${this.baseUrl}/${idfornecedor}`;
    return this.http.get<fornecedor>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(fornecedor: fornecedor): Observable<fornecedor> {
    const url = `${this.baseUrl}/${fornecedor.idfornecedor}`;
    return this.http.put<fornecedor>(url, fornecedor).pipe(
      map((obj) => obj),
      catchError((e) => this.errorDuplicidade(e))
    );
  }

  delete(idfornecedor: number): Observable<fornecedor> {
    const url = `${this.baseUrl}/${idfornecedor}`;
    return this.http.delete<fornecedor>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorMovimentado(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  errorDuplicidade(e: any): Observable<any> {
    this.showMessage("Fornecedor já existente!", true);
    return EMPTY;
  }

  errorMovimentado(e: any): Observable<any> {
    this.showMessage("Não é possível excluir um fornecedor com produto já cadastrado!", true);
    return EMPTY;
  }
}
