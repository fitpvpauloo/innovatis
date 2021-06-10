import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { administrador } from "./administrador.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})

export class administradoService {
 
  baseUrl = "http://54.90.39.27:5000/usuarios";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(administrador: administrador): Observable<administrador> {
    return this.http.post(`${this.baseUrl}/novo`, administrador).pipe(
      map((obj) => obj),
      catchError((e) => this.errorDuplicidade(e))
    );
  }

  read(): Observable<administrador[]> {
    return this.http.get<administrador[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(idusuario: number): Observable<administrador> {
    const url = `${this.baseUrl}/${idusuario}`;
    return this.http.get<administrador>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(administrador: administrador): Observable<administrador> {
    const url = `${this.baseUrl}/${administrador.idusuario}`;
    return this.http.put<administrador>(url, administrador).pipe(
      map((obj) => obj),
      catchError((e) => this.errorDuplicidade(e))
    );
  }

  delete(idusuario: number): Observable<administrador> {
    const url = `${this.baseUrl}/${idusuario}`;
    return this.http.delete<administrador>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorMovimentado(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  errorDuplicidade(e: any): Observable<any> {
    this.showMessage("administrador já existente!", true);
    return EMPTY;
  }

  errorMovimentado(e: any): Observable<any> {
    this.showMessage("N\u00e3o \u00e9 poss\u00edvel excluir um usu\u00e1rio que j\u00e1 lan\u00e7ou movimenta\u00e7\u00e3o!", true);
    return EMPTY;
  }
}
